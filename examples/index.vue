<template>
  <div>
    <div class="row">
      <text class="button" @click="getFlagClick">getFlag</text>
      <text class="button" @click="getFlagAsyncClick">getFlagAsync</text>
      <text class="button" @click="track">track</text>
      <text class="button" @click="trackWithAttribute">trackWithAttribute</text>
      <text class="button" @click="getExp">getExp</text>
      <text class="button" @click="getClientid">getClientid</text>
      <text class="button" @click="jump">Jump webView</text>
    </div>
  </div>
</template>

<script>
  var nav = weex.requireModule('navigator')
  const modal = weex.requireModule('modal')
  const syncTestModal = weex.requireModule('syncTest')
  const adhocModal = weex.requireModule('adhoc')
  export default {
    methods: {
      
      getFlagClick (event) {
        adhocModal.getFlag('flag2',300,function(ret){
          modal.toast({
            message: JSON.stringify(ret),
            duration: 0.8
          })
        })
      },
      getFlagAsyncClick (event) {
        adhocModal.asynchronousGetFlag('flag1',true,10,function(ret){
          modal.toast({
            message: JSON.stringify(ret),
            duration: 0.8
          })
        })
      },

      track (event) {
        modal.toast({
          message: 'track',
          duration: 0.8
        })
        adhocModal.track('weexName','1');
      },

      trackWithAttribute (event) {
        modal.toast({
          message:'trackAttribute',
          duration: 0.8
        })
        var data = {'he':'bei'};
        adhocModal.trackWithAttribute('xiao','0.5',JSON.stringify(data));
      },

      getExp (event) {
        adhocModal.getCurrentExperiments(function(ret) {
            modal.toast({
              message:JSON.stringify(ret),
              duration: 0.8
            })
        });
      },

      getClientid (event) {
        adhocModal.getClientid(function(ret) {
          modal.toast({
            message:JSON.stringify(ret),
            duration:0.8
          })
        });
      },

      jump (event) {
        var url = this.$getConfig().bundleUrl;
        url = url.split('/').slice(0,-1).join('/') + '/navigation.js';
        console.log(url);
        nav.push({
          url: url,
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + event })
        })
      }
    }
  }

</script>

<style scoped>
  

  .row {
    flex-direction: column;
    justify-content: space-between
  }
  .button {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    border-radius: 12px;
    padding-top: 20px;
    padding-left: 36px;
    padding-bottom: 20px;
    padding-right: 36px;
    font-size: 36px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 10px;
  }
</style>