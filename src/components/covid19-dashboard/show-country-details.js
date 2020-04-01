import React from "react";
import {withRouter} from "react-router-dom";
import "./show-country-details.css";
import { Header } from "./header.js";
import { MdArrowBack } from "react-icons/md";
// import {FiLoader} from "react-icons/fi";

class ShowCountryDetails extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            countries : [],
            country : {}
        };
       
    }
    
    navigateToSpecifiedCountry=(country)=> {
        const {history} = this.props;
        
        history.push(
            {
                
                pathname : `/covid19-dashboard/details/${country.alpha3Code}`
            });
        this.setState({country:country}); 
        
         
    }
    
     componentDidMount() {
        this.getCurrentCountry();
    }
    

    getCurrentCountry = () => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data =>{
                const alpha3Code = this.props.match.params.countryId;
                const currentCountry = data.filter((country)=> country.alpha3Code === alpha3Code);
                this.setState({countries:data,country:currentCountry[0]});
            } );
    }
    
    
    renderBorderCountries = ()=>
    {
        const bordernNations = this.state.country.borders;
        const borderCountries = this.state.countries.filter((territory)=>
            bordernNations.includes(territory.alpha3Code)
        );
        
        return borderCountries.map((country)=>
        <button type="button" className={`${this.props.theme}-btn btn`} onClick={()=>this.navigateToSpecifiedCountry(country)} key={country.alpha3Code}>{country.name}</button>);
    }
    
    
    goBack = ()=>
    {
        const {history} = this.props;
        history.push(
            {
                pathname : `/covid19-dashboard`
            });
    }
    
    render() {
        console.log(this.state.country);

        if(this.state.country !== "")
        {
            return (
            <div className={`country-details-body ${this.props.theme}`}>
            <Header theme={this.props.theme} onChangeSelectedTheme={this.props.onChangeSelectedTheme} />
            <button className={`${this.props.theme}-btn btn`} type="button" onClick={this.goBack} ><MdArrowBack style={{fontSize:"25px"}}/>Back</button>
            <div className="country-details-container">
                <div className="flag-container">
                    <img className="country-flag" alt={this.state.country.name} src={this.state.country.flag} />
                </div>
                
                <div className="country-info-container">
                    
                    <h3>{this.state.country.name}</h3>
                    <div className="country-details">
                        <div>
                            <p><span className="bold">Native Name:</span> {this.state.country.nativeName}</p>
                            <p><span className="bold">Population:</span> {this.state.country.population}</p>
                            <p><span className="bold">Region: </span>{this.state.country.region}</p>
                            <p><span className="bold">SubRegion: </span>{this.state.country.subregion}</p>
                            <p><span className="bold">Capital: </span>{this.state.country.capital}</p>
                        </div>
                        <div>
                            <p><span className="bold">Top Level Domain: </span>{this.state.country.topLevelDomain}</p>
                            
                            <p><span className="bold">Languages:</span> 
                            
                            </p>
                        </div>
                        </div>
                        <div>
                            <h3>Border Countries:</h3>
                            <div className="border-countries-btn-container">{this.renderBorderCountries()}</div>
                        </div>
                    
                
                </div>
                 
            </div>
           
            </div>
        );
        }
        else
            return(<div className="loader-container">
            <img alt="loading img" src="https://tenor.com/view/loading-fast-gif-14829442"/>
            <p className="bold">Loading...</p>
            
            </div>);
    }
}
export default withRouter(ShowCountryDetails);

// <img src="https://media1.tenor.com/images/713a3272124cc57ba9e9fb7f59e9ab3b/tenor.gif?itemid=14829442"/>
//<img src="https://media1.tenor.com/images/8541c07f20eba85d78f2ef7087ee1a0e/tenor.gif?itemid=15295932"/>