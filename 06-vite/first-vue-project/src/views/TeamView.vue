<script setup>
// import team from "@/team.json";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import {useTeamStore} from "@/stores/TeamStore.js";

let team = useTeamStore();
team.fill();

setTimeout(() => {
    team.grow(25);
}, 2000);

</script>

<template>
    <!-- <TeamHeader :team="team" /> -->
    <TeamHeader />

    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
        <!-- <TeamMembers :team="team" /> -->
        <TeamMembers />
    </div>

    <!-- <TeamFooter :team="team" /> -->
    <TeamFooter />

    
</template>