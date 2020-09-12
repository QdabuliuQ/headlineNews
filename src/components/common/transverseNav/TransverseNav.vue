<template>
  <div class="TransverseNav">
      <div class="box">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TransverseNav'
}

</script>
<style scoped>
    .TransverseNav{
        display: inline-block !important;
        /* width: auto; */
        height: 30px;
        background-color: #fff;
        line-height: 30px;
        font-size: 13.5px;
    }
    .box{
        height: 30px;
        white-space:nowrap;
        overflow: hidden;
    }
</style>