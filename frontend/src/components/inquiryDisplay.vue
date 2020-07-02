<template>
    <div id="right_panel">
        
        <!-- Top panel which shows description of course name -->
        <v-card width="100%" color="#e5e8ed">
            <v-card-text>
                <!-- course name & description-->
                <v-card-title class="font-weight-black">
                    <!-- course name -->
                    {{ items.name }}
                    <!-- send chips to the right -->
                    <v-spacer></v-spacer>
                    <!-- chips with special information -->
                    <v-chip small color="orange" class="ma-2" text-color="white">IHSS 1140</v-chip>
                    <v-chip small color="pink" class="ma-2" text-color="white">Fall terms annually</v-chip>
                    <v-chip small color="green" class="ma-2" text-color="white">Any Prerequisites</v-chip>
                </v-card-title>

                <!-- course description -->
                <v-card-text class="font-weight-medium">
                   {{ items.courseDescription }}
                </v-card-text>
            </v-card-text>
        </v-card>

        <br>

        <p class="font-weight-bold">Select one of the following compatible pathways </p>
        
        <!-- Navigational drawer for pathway details -->
        <div id="navigationalDrawer_and_coursePanel">
            <div id="navigationalDrawer">
                <v-list color="#e5e8ed" flat nav class="py-3">
                    <v-list-item v-for="item in items.pathways" :key="item" @click="specifiedPathway = item">
                        <v-list-item-content>
                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-list-item-title v-on="on">{{ item }}</v-list-item-title>
                                </template>
                                <span>{{ item }}</span>
                            </v-tooltip>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
                    <!-- Information for each pathway -->
            <v-card id="coursePanel" width="85%">
                <!-- pathway name -->
                <v-card-title>
                    Pathway: {{ specifiedPathway }}
                </v-card-title>

                <v-divider></v-divider>

                <!-- pathway description -->
                <v-card-text class="font-weight-black">
                    Pathway description for:  {{ specifiedPathway }} <br> Artificial Intelligence is quickly becoming pervasive in our lives. Study how Artificial Intelligence can benefit from concepts and ideas from cognitive science, and explore the ways in which Artificial Intelligence is changing our lives.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="selectPathway(specifiedPathway)">Select</v-btn>
                    <!-- so now data has to transfer from here to the pathways page -->
                </v-card-actions>
            </v-card>
        </div>

    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

    props: ['items'],
    data() {
        return {
            specifiedPathway: "a",
            selectedPathway: "a"
        }
    },
    methods: {
        ...mapMutations(['setSelectedPathway']),
        selectPathway(pathway_name){
            this.setSelectedPathway(pathway_name)
            console.log(pathway_name)
        },
    }
}

</script>


<style>


    #navigationalDrawer_and_coursePanel {
        width: 100%;
    }

    #navigationalDrawer {
        float: left;
        width: 15%;
    }

    #coursePanel {
        float: left;
    }

 
</style>