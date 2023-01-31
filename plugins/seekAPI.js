import RecommendationsAPI from '@/api/recommendations.js';

export default function( { $axios }, inject ) {
    const api = {
        recommendations: RecommendationsAPI( $axios )
    }

    inject('api', api);
}