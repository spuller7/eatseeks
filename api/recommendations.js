export default $axios => ({
    async index( params ) {
        try {
            return await $axios.$get('/api/v1/recommendations', {
                params: params
            });
        } catch ( err ) {
            
        }
    }
})