<template>
    <div id="right_panel">
        
        <!-- Top panel which shows description of course name -->
        <v-card width="100%" class="mt-1" color="#e5e8ed">
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

        <p class="font-weight-bold"> Select one of the following compatible pathways </p>
        
        <!-- Navigational drawer for pathway details -->
        <div id="navigationDrawer_4_pathwayDetails">
            <v-list color="#e5e8ed" flat width="15%" nav class="py-3">
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
        <div id="coursePanel">
            <v-card width="100%">
                <!-- pathway name -->
                <v-card-title>
                    Pathway: {{ specifiedPathway }}
                </v-card-title>

                <v-divider></v-divider>

                <!-- pathway description -->
                <v-card-text class="font-weight-black">
                    Pathway description for: {{ specifiedPathway }}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="showAdditionalCourses(specifiedPathway)">Select</v-btn>
                    <!-- so now data has to transfer from here to the pathways page -->
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>

export default {
    props: ['items'],
    data() {
        return {
            specifiedPathway: "a",
            selectedPathway: "a"
        }
    },
    methods: {
        showAdditionalCourses(path) {
            alert(path);
        }
    }
}

</script>


<style scoped>

    
    #navigationDrawer_4_pathwayDetails {
        float: left;
        width: 100%;
    }

    #coursePanel {
        position: absolute;
        left: 15%;
        width: 85%;
    }

    #cousePanel_4_showCourses {
        position: absolute;
        top: 100%;
    }






</style>