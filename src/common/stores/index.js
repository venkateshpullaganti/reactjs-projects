import authStore from '../../Authentication/stores'
import productStores from '../../Botique/stores'
import cartStore from '../../Cart/stores'

export default { authStore, ...productStores, cartStore }
