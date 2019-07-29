<template>
    <div>
        latest movie
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            wholeResponse: [],
            loading: true,
        }
    },
},
mounted() {
    axios
        .get ('http://www.omdbapi.com/?s=mummy&apikey=XXXXX&page=1&type=movie&Content-Type=application/json')
        .then (response => {
            this.wholeResponse = response.data.Search
        })
        .catch(error => {
            console.log(error)
        })
},
</script>