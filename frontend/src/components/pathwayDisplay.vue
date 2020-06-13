<template>
    <div id="right_panel">
    <!-- pathway info -->
    <v-card width="100%" class="mt-1" color="#e5e8ed">
        <v-card-text>
            <!-- pathway name -->
            <p class="font-weight-black">
                Pathway Description
            </p>

            <!-- pathway description // THIS SHOULD CHANGE UPON CLICKING A NEW PATHWAY -->
            <p class="font-weight-medium">
                {{ items.pathDescription }}
            </p>
        </v-card-text>
    </v-card>
    
    <br>

    <!-- THIS SHOULD CHANGE (FIRST/SECOND/THIRD) ON STEPPER EVENT -->
    <p class="font-weight-bold"> Select a first course option </p>
    
    <!-- pathway courses & course information // THIS SHOULD CHANGE UPON NEW PATHWAY CLICK (NEW COURSES DISPLAYED)-->
    <div>
        <v-card width="100%" height="100%" color="#e5e8ed">

            <!-- all courses possible for path -->
            <v-navigation-drawer v-modoel="drawer" color="#e5e8ed" height="100%" width="256" class="mt-4">
                <ul class="mt-4 mr-2">
                    
                    <v-btn color="#e5e8ed" block depressed class="mt-2 text-wrap" v-for="item in items.Courses" :key="item" @click="specifiedCourse = item">
                        {{ item }}
                    </v-btn>
                </ul>
            </v-navigation-drawer>

            <!-- course information -->
            <v-card-title id="course_information_headline" class="font-weight-black">Course Information</v-card-title>

            <!-- THIS SHOULD CHANGE UPON CLICKING ON COURSE NAME  -->
            <v-card-title id="actual_course_information" class="font-weight-regular">
                Course information for id: {{ specifiedCourse }}
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>

                <!-- THIS SHOULD TRIGGER STEPPER EVENT -->
                <v-btn text color="primary">
                    Select
                </v-btn>
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
            specifiedCourse: null
        }
    },

}
</script>

<style scoped>
    #right_panel {
        position: absolute;
        left: 16%;
        top: 4%;
        width: 80%;
    }


    #course_information_headline {
        background:#e5e8ed;
        position: absolute;
        top: 0px;
        left: 256px;  
    }

    #actual_course_information {
        background: #e5e8ed;
        position: absolute;
        left: 256px;
        top: 30%;
    }

</style>