## weex-adhoc iOS API


所有的 API 都能在 [weex-adhoc/examples/index.vue](../examples/index.vue) 中查到。

#### 获取AdhocModule
```
const adhocModal = weex.requireModule('adhoc')
```
#### API

- <V> getFlag(String, V, Function)

  获取后台设置的指定实验变量的值，实验变量的名字注意与后台保持一致，V为默认值参数，ret为获取成功的实验变量的值
  
  ```
  adhocModal.getFlag('flag2',300,function(ret){
          //ret 
        })
      }
  ```
  
- track(String, Number)
  
  统计需要的优化指标，用以实现科学有效的测试
  
  ```
  adhocModal.track('stat_nameXXX', 7);
  ```
  
- trackWithAttribute(String, Number, Dictionary)

  统计需要的优化指标（可以添加附加信息），用以实现科学有效的测试 

  ```
  adhocModal.trackWithAttribute('stat_nameXXX', 7, {name: 'Tom', age: 18});
  ```
 
- getCurrentExperiments(Function)

  获取当前设备所在实验的实验名称和试验ID列表
  
  ```
  adhocModal.getCurrentExperiments(experiments => {
  
  });
  ```
- <V> asynchronousGetFlag(String, V, Function)

  异步方式从服务器直接获取实验变量的值
  
  ```
  adhocModal.asynchronousGetFlag('flagName', 10, flagValue => {
  
  });
  ```
 - <V> getFlagFast(String, V, Function)  
      异步方式从服务器直接获取实验变量的值

      ```
      adhocModal.getFlagFast('flagName', 10, flagValue => {

      });
      ```
  