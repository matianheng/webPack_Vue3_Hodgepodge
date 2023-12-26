<template>
  <nut-button>22</nut-button>
  <nut-progress class="ss"
    percentage="30"
>
</nut-progress>
<nut-checkbox v-model="checkbox1" label="复选框">复选框</nut-checkbox>
  <nut-checkbox v-model="checkbox2" text-position="left">复选框</nut-checkbox>
</template>    
<script setup>
import {ref} from 'vue' 
const checkbox1  =  ref(false);
const checkbox2  =  ref(false)
import '@/teme/custom_theme.scss';
</script>
<style scoped> 
:deep(.nut-progress-inner) {
    width: 30%;
    height: 100%;  
    border-radius: var(--nut-progress-outer-border-radius, 12px);
    background: var(--nut-progress-inner-background-color, linear-gradient(135deg, var(--nut-primary-color, #696969) 0%, #d2d2d2 100%)) !important;
    -webkit-transition: all .4s;
    transition: all .4s;
}
:deep(.nut-checkbox__icon) {
    color: var(--nut-primary-color, #777777);
    font-size: var(--nut-checkbox-icon-font-size, 18px);
    transition-duration: .3s;
    transition-property: color,border-color,background-color;
}
</style>