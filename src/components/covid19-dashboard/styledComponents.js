import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const RootContainer = styled.div`
    {
      minheight: '100vh';
      transition: 'all .5s';
   }
   ${tw``};
`
export const DashboardBody = styled.div`
   ${props => ({
      backgroundColor: props.bgColor,
      color: props.color
   })}

   ${tw`mt-0 flex-1 flex-col justify-center items-center outline-none	`};
`

export const CountriesList = styled.ul`
    {
      display: 'flex';
      flexwrap: 'wrap';
      justifycontent: 'center';
   }
   ${tw``};
`

const Bold = styled.span`
   font-weight: bold;
`

const BorderBtn = styled.button(
   {
      padding: '5px',
      margin: '5px'
   },
   props => ({
      color: props.selectedTheme.color,
      backgroundColor: props.selectedTheme.secondaryBgColor
   })
)

const CountryDetailsDiv = styled.div(
   {
      minHeight: '100vh'
   },
   props => ({
      backgroundColor: props.selectedTheme.backgroundColor,
      color: props.selectedTheme.color
   })
)

const NavigatorDiv = styled.div({
   padding: '20px',
   display: 'flex'
})
const StyledBtn = styled.div(
   {
      backgroundColor: 'white',
      border: 'none',
      fontSize: '18px',
      display: 'flex',
      margin: '10px',
      justifyContent: 'baseline',
      alignItems: 'center',
      borderRadius: '4px',
      width: '100px'
   },
   props => ({
      backgroundColor: props.selectedTheme.secondaryBgColor,
      color: props.selectedTheme.color
   })
)

export { StyledBtn, NavigatorDiv, CountryDetailsDiv, BorderBtn, Bold }
