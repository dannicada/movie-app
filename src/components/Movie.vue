<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="text=xs-center">
                <v-dialog
                v-model="dialog"
                width="500">
                <v-btn
                slot="activator"
                color="green"
                dark>
                View Ratings
                </v-btn>
                <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                Ratings
                </v-card-title>
                <v-card-text>
                <table style="width:100%" border="1">
                <tr>
                    <th>Source</th>
                    <th>Ratings</th>
                </tr>
                <tr v-for="(ratings,index) in this.ratings" >
                </tr>
                </table>
                </v-card-text>
                </v-card>
                </v-dialog>
                </div>                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    props: ['id'],
    data () {
        return {
            singleMovie: ''
        }
    },
    mounted() {
        axios
        .get('http://www.omdbapi.com/?apikey=b76b385c&i=XXXXX&Content-Type=application/json')
        .then(response => {
            this.singleMovie = response.data
        })
        .catch(error => {
            console.log(error)
        })
    },
}
</script>
