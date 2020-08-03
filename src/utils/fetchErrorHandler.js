import pageNotFound from '../components/PageNotFound/PageNotFound'

export default (error)=> {
    if(error){
        return {
            status: false,
            page: pageNotFound()
        }
    }
}