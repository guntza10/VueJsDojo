# **`VueJsDojo`**

## **`VueJs(V.2)`**

=> front-end framework ที่เอาไว้ทำ Web Application โดยใช้ Javascript ในการเขียน

## **`Why VueJs?`**

- เขียนด้วย HTML,CSS,Javascript ที่ใช้เขียนในหลายๆ framework
- เขียนง่าย Learning curve ไม่สูง
- มีขนาดของ project ที่เล็ก (ไม่กี่ KBs)
- implement บน Virtual DOM ที่มีประสิทธิภาพในการอัพเดท DOM (Document Object Model)
- แยก UI, Business Logic ออกจากกัน
- fast dev เพราะเป็น reuseable code

`Note : ` DOM (Document Object Model) คือ Object ของ HTML ที่ Web Browser สร้างขึ้นมาเมื่อหน้าเว็บโหลดเสร็จ

- tag ต่างๆใน HTML จะเรียกว่า Element(DOM)
- เราใช้ DOM HTML ในการเข้าถึง Element(tag) ต่างๆ ผ่านคำสั่งของ Javascript

## **`Basic For VueJs`**

## _`Vue Instance`_

=> เป็น Object ที่สร้างจาก `new Vue()` โดยข้างในก็จะมี property ต่างๆที่จัดการเกี่ยวกับ view model

![vueInstance](img/vueInstance.PNG)

- property el จะ ref ถึง element ใน DOM
- property data จะ ref data ของ component
- binding data ใช้ `{{ }}` ครอบ data ที่ต้องการจะ bind

## _`Directives`_

### **v-model**

=> เป็นการ binding แบบ Two-Way data

![v-model](img/v-model.PNG)

### **v-if**,**v-else-if**,**v-else**

`Note : ` `v-if`, `v-else-if`, `v-else` มันจะ render เฉพาะ DOM Element ที่เข้าเงื่อนไขเท่านั้น DOM Element ไหนที่ไม่เข้าเงื่อนไขจะไม่ถูกเอามา render

![v-if](img/v-if.PNG)

### **v-show**

`Note : ` v-show ไม่ว่าจะเข้าหรือไม่เข้าเงื่อนไขมันก็ถูก render เหมือนกันหมด เพียงแต่ว่าถ้าไม่เข้าเงื่อนไขมันจะถูก render แต่ไม่เอามาแสดง (`จะถูก set css display : none ไว้`)

![v-show](img/v-show.PNG)

### **v-bind**

=> v-bind เป็นคำสั่งที่เอาไว้ binding HTML Attribute

`Note : ` v-bind สามารถเขียนแบบย่อได้ `v-bind:disabled` -> `: disabled`

![v-bind](img/v-bind.PNG)

![v-bind2](img/v-bind2.PNG)

`Note : ` ถ้าเราอยากจะทำ dynamic v-bind ให้เราใส่ [ ] ครอบคำสั่งที่เราต้องการจะทำ dynamic

![v-bind3](img/v-bind3.PNG)

### **v-text**

=> เป็นคำสั่งที่เอาไว้ binding text จะเหมือนกับการ binding ด้วย `{{ }}`

![v-text](img/v-text.PNG)

### **v-html**

=> เป็นคำสั่งที่เอาไว้ binding html

![v-html](img/v-html.PNG)

![v-html2](img/v-html2.PNG)

### **v-once**

=> เป็นคำสั่งที่เอาไว้ render DOM Element แค่ 1 ครั้งที่มันถูกสร้างและเป็น static ไม่มีการเปลี่ยนแปลงอีก

![v-once](img/v-once.PNG)

![v-once2](img/v-once2.PNG)

### **v-for**

=> เป็นคำสั่งที่เอาไว้ทำ loop

![v-for](img/v-for.PNG)

`Note : ` สามารถกำหนด index ได้ จาก parameter ตัวที่ 2

`Note : ` ในการ render ด้วย v-for จะต้อง `v-bind:key`, `:key` ให้แต่ละ element ด้วย ไม่งั้น vueJs จะ error ไม่สามารถ render ได้ (`vueJs ต้องการ key เพื่อ access เข้าถึง DOM Element แต่ละตัวได้`)

![v-for2](img/v-for2.PNG)

## _`Methods`_

=> เป็น property ของ vue instance ที่เอาไว้เขียน function ต่างๆ

![methods](img/methods.PNG)

## _`Data-Binding`_

### **simple binding**

=> ใช้ `{{ }}` ครอบ data ที่ต้องจะ bind

### **v-model**

=> เป็นการ binding แบบ Two-Way data

![v-model](img/v-model.PNG)

### **binding logic with VueJs Directive**

=> เราสามารถ binding logic ใน VueJs Directive ได้ด้วยการใส่ `[ ]` ครอบ logic

![bindingLogicWithDirective](img/bindingLogicWithDirective.PNG)

`Note : ` แต่เพื่อความ clean code เค้าจะไม่นิยมเขียน Logic ใส่ไปใน VueJs Directive กัน แต่จะเขียนเป็น function แล้วโยนไปใช้ binding แทน ตามตัวอย่างข้างล่างนี้

![bindingLogicWithDirective2](img/bindingLogicWithDirective2.PNG)

![bindingLogicWithDirective3](img/bindingLogicWithDirective3.PNG)

## _`Events`_

=> ในการ binding event จะใช้ `v-on:event`

`Note : ` สามารถเขียนแบบย่อได้ `v-on:click` => `@click` เป็นต้น

### **click**

=> เป็น event ที่เกิดจากการ click => `v-on:click`, `@click`

### **keyup**

=> เป็น event ที่เกิดจากการพิมพ์อะไรก็ได้ => `v-on:keyup`, `@keyup`

`Note : ` เราสามารถ specific การ keyup ของเราได้ เช่น `v-on:keyup.enter`, `@keyup.enter` เป็นต้น

## _`Filters`_

=> เป็น property ของ vue instance ที่เอาไว้เขียน function ต่างๆ ที่จัดการเกี่ยวกับ pipe (`เปลี่ยนแปลงการ display data ที่ render ออกมา show โดยที่ data ไม่ได้เปลี่ยน value`)

![filters](img/filters.PNG)

![filters2](img/filters2.PNG)

`Note : ` จากตัวอย่างข้างบนจะเห็นว่า pipe จะทำการส่ง `cat.name` เข้ามาเป็น parameter `value` ใน function capitalize

`Note : ` สามารถทำ multi pipe หลายๆ function ได้ (`ทำ function ตามลำดับ pipe`)

![filters3](img/filters3.PNG)

![filters4](img/filters4.PNG)

## _`Computed Properties`_

=> เป็น property ของ vue instance ที่เอาไว้กำหนด property ที่ต้องจัดการ logic ซับซ้อน, จัดการเกี่ยวกับการ update ค่าต่างๆ ส่วนใหญ่จะเอาไว้จัดการเกี่ยวกับ state ของ `VueX` แล้วเอาไป binding HTML เพื่อ render แสดงออกมา เราจะเอามาจัดการที่นี่เพื่อความ clean code, reuseable code แทนการไปจัดการที่ data property ของ vue instance

`Note : ` เอาไว้กำหนด property ที่มีการ share data จากส่วนกลาง เช่น VueX, LocalStorage เป็นต้น เนื่องจาก data พวกนี้สามารถเปลี่่ยนแปลงและถูก update ได้ตลอดเวลา ถ้าเราไปจัดการหรือกำหนดที่ data property มันจะทำแค่คร้้งเดียวคือตอนที่ initial หน้านั้น หรือ component นั้นขึ้นมา ทำให้ถ้ามันมีการเปลี่ยนแปลงหรือ update มันจะไม่สามารถ keep track data ที่เปลี่ยนแปลงได้ ซึ่ง `computed property` ถูกสร้างมาเพื่อสิ่งนี้

`Note : ` เอาไว้ keep track data อะไรซักอย่าง แล้วจัดการ Logic กับ data นั้นก่อนจะ return ไปใช้เป็น computed property

![computed](img/computed.PNG)

![computed2](img/computed2.PNG)

## _`Components`_

=> เป็นชิ้นส่วนเล็กๆ ที่มาประกอบรวมกันจนกลายเป็น page

`Note : ` สิ่งที่ควรรู้เกี่ยวกับ component

- ทุกครั้งที่จะเอา component ไปใช้ที่ page ต้อง declare ที่ `component property` ของ vue instance เสมอ
- เราสามารถส่งค่าระหว่าง component ผ่าน props (`HTML Attribute ที่เอาไว้ส่งค่าระหว่าง component`)
- เรา binding props ด้วย `v-bind:props = ค่าที่จะส่ง`, `:props = ค่าที่จะส่ง`
- component จะรับค่า props ต่างๆที่ส่งเข้ามาผ่าน `props property` ของ component

![component](img/component.PNG)

![component2](img/component2.PNG)

![component3](img/component3.PNG)

## _`Component Lifecycle`_

=> จะมี 4 life cycle

- created -> จะถูกเรียกเมื่อ component เริ่ม initialize (`ถูกสร้าง`)
- mounted -> จะถูกเรียกเมื่อ component initialize เสร็จ (`สร้างเสร็จ`)
- updated -> จะถูกเรียกเมื่อ state หรือ data มีการเปลี่ยนแปลง (`data มีการเปลี่ยแปลง`)
- destroyed -> จะถูกเรียกเมื่อ component ถูกทำลาย

## _`Watched Property`_

=> เป็น property ของ vue instance ที่เอาไว้เขียน function ที่เกี่ยวกับการ keep track การเปลี่ยนแปลงของ props (`ถ้า props ที่ parent component มีการเปลี่ยนแปลง มันจะเข้ามา run function ใน watch property`)

`Note : ` สามารถเขียน watcher ได้ 2 Approach

- `function`

  > ![watch1](img/watch1.PNG)
  >
  > => watch แบบ function จะทำก็ต่อเมื่อ props มีการเปลี่ยนแปลง

- `object`

  > ![watch2](img/watch2.PNG)
  >
  > => watch แบบ object จะทำก็ต่อเมื่อ props มีการเปลี่ยนแปลงเหมือนกัน เพียงแต่เราสามารถ config ให้มันทำงานได้เลยตั้งแต่ส่งค่ามาคร้้งแรก
  >
  > - `immediate` => เป็น property ที่เอาไว้ set ว่าจะให้มันทำงานใน watch เลยมั้ยตั้งแต่คร้้งแรกที่ส่ง props เข้ามา (`true`) ถ้าไม่ (`false`)
  > - `handler()` => เป็นส่วนที่เอาไว้จัดการ logic

# **`VueJs`**

## **`Structure`**

### _`package.json`_

=> เป็นไฟล์ที่มีรายละเอียดพวก dependency ต่างๆที่เราลง,script ต่างๆที่เราใช้ run,เครื่องมือ tool ต่างๆที่ถูก set ไว้ในตัว project นี้

### _`node_modules`_

=> เป็น folder ที่เก็บ package ต่างๆของ node

### _`public`_

=> เป็น folder ที่เก็บไฟล์ public ต่างๆ เช่น index.html (`main template`),พวกรูปภาพ,โลโก้

### _`src`_

=> เป็น folder ที่เราใช้ในการทำงานต่างๆบน VueJs จะประกอบไปด้วย

- folder assets -> ที่เอาไว้เก็บพวกไฟล์รูปต่างๆ
- folder components -> ที่เอาไว้เก็บ component ที่จะใช้ใน VueJs ทั้งหมด
- App.vue -> เป็น root component
- main.js -> เป็นส่วนที่ render ตัว root component (`App.vue`) ให้ไปแสดงที่ index.html (`main template`) ผ่านการ mount DOM Element ด้วย `id="app"`

### _`index.html(ใน folder public)`_

=> เป็น main template ของ Web Application

## **`Component`**

![componentStructure](img/componentStructure.PNG)

=> จากรูปข้างบน structure component จะแบ่งออกเป็น 3 ส่วน

- `template` -> เป็นส่วนที่เอาไว้เขียน HTML

  `Note : ` ใน template สามารถมี tag element container ได้เพียง 1 ตัวเท่านั้น (`ต้องมีตัว tag container ครอบทุก tag ได้แค่ 1 ตัว`)

- `script` -> เป็นส่วนที่เอาไว้เขียน javascript
- `style` -> เป็นส่วนที่เอาไว้เขียน CSS

  `Note : ` การกำหนด `scoped` ให้กับ tag style เป็นการบอกว่า css ที่ใช้จะใช้แค่ใน component นี้เท่านั้น ไม่ส่งผลต่อ global scope

`Note : ` สามารถใช้ Bootstrap Vue เข้ามาช่วยในการจัดการ css ได้

`Note : ` library fetch ที่เอาไว้จัดการเกี่ยวกับการดึง,ส่งข้อมูลกับ API เป็น standard library ที่มาพร้อมกับ node_module package ไม่ต้อง import เพิ่ม

### **`Property in component`**

- `data` -> เป็น object ที่เก็บข้อมูลของ component
- `created` -> เป็น life cycle ที่จะถูกเรียกตอนสร้าง component
- `mounted` -> เป็น life cycle ที่จะถูกเรียกเมื่อ component สร้างเสร็จ
- `updated` -> เป็น life cycle ที่จะถูกเรียกเมื่อ state หรือ data ของ `component` มีการเปลี่ยนแปลง
- `destroyed` -> เป็น life cycle ที่จะถูกเรียกเมื่อ component ถูกทำลาย
- `filters` -> เป็น object ที่เอาไว้เขียน function pipe
- `methods` -> เป็น object ที่เอาไว้เขียน function จัดการเกี่ยวกับ event หรือ logic ต่างๆ
- `computed` -> เป็น object ที่เอาไว้เขียน property ที่มีการเปลี่ยนแปลงและต้องการ keep track data และนำ property ใน computed ไปใช้ต่อ
- `props` -> เป็น array หรือ object ที่เอาไว้ declare props ที่รับส่งค่าจาก parent component
- `components` -> เป็น object ที่เอาไว้ declare component อื่นที่ต้องการจะใช้บน parent component

## **`Vue Devtool`**

=> เป็น extension สำหรับการ inspect data บน component

## **`Props & Slots`**

### _`Props`_

=> ค่าที่ส่งระหว่าง component ไม่ว่าจะเป็น primitive type data ต่างๆ หรือจะเป็น function, object ก็ได้

- ในการส่ง props จาก parent component ไปที่ child component จะส่งค่าผ่าน HTML Attribute (`ใช้ v-bind ในการ binding`)
- ในการรับ props จาก parent component มาที่ child component จะรับได้ 2 Approach ซึ่งรับผ่าน `props property`

1. รับมาเป็น Array

![props1](img/props1.PNG)

2. รับมาเป็น Object

![props2](img/props2.PNG)

## **`Vuex & Vue-Router`**

![router_vuex](img/router_vuex.PNG)

`Note : ` router, vuex จะถูก config ไว้ที่ main.js โดยจะถูกส่งเป็น property ของ vue instance (`ถูก set เป็น option ของ vue instance`)

- router
- store (`for vuex`)

### **`Structure`**

1. folder `views` => จะเป็นที่เก็บ page ทั้งหมดของ App

![view](img/view.PNG)

![view2](img/view2.PNG)

2. folder `components` => จะเป็นที่เก็บ component ทั้งหมด ที่จะเอามาใช้ในแต่ละ view(`page`)

![components](img/components.PNG)

![components2](img/components2.PNG)

`Note : ` ในแต่ละ view สามารถเอา component มาใช้ standalone ของใครของมันได้ ทำให้เกิด reuseable code ขึ้น (`component ที่สร้างขึ้นสามารถเอาไปใช้ซ้ำที่ view ไหนก็ได้ คือเขียนครั้งเดียวแต่สามารถนำไปใช้กับหลายๆที่ได้นั่นเอง`)

3. `index.js` ใน folder `router` => เป็นที่สำหรับ config path route ในการเข้าถึงหน้าของแต่ละ view(`page`)

- ใช้กำหนด route ให้แต่ละ view
- ใช้ทำ Lazy loading (`การ group component เพื่อที่ตอน initialize App ขึ้นมาจะได้ไม่ต้อง load ทุก component ทั้งหมดมาทีเดียวตอนเปิด App ครั้งแรก แต่จะค่อยๆ load ทีละ group component ที่มีการเรียกใช้`)

`Note : ` view มันก็คือ component ที่เป็น page

3. `index.js` ใน folder `store` => เป็นไฟล์ของ vuex ที่เอาไว้แชร์ data ที่ต้องการเอาไปใช้ในหลายๆ view หลายๆ component

![vuex](img/vuex.PNG)

### **`Route`**

=> เป็นการกำหนด route path ในการเข้าถึงหน้าของแต่ละ view

![router](img/router.PNG)

`Note : ` เป็นการกำหนดว่าถ้าเข้ามาด้วย path นี้จะต้องเอา view หรือ component อันไหนมา render

### **`Dynamic Route Matching`**

_Example 1_

![dynamicRoute](img/dynamicRoute.PNG)

_Example 2_

![dynamicRoute2](img/dynamicRoute2.PNG)

`Note : ` get ค่า route params ได้จาก `$route.params.ชื่อของrouteparam`

![dynamicRoute3](img/dynamicRoute3.PNG)

`Note : ` ref route navigate https://router.vuejs.org/guide/#javascript

### **`Vuex`**

=> เป็นที่สำหรับ share data สำหรับเอาไปใช้ใน component ต่างๆ จะแบ่งออกเป็น 3 ส่วน

1. `state` => เป็น object ที่เอาไว้เก็บ data ที่ต้องการจะ share เอาไปใช้ใน component ต่างๆ

   ![vuexState](img/vuexState.PNG)

2. `mutations` => เอาไว้จัดการ update ค่าให้ state

   `Note :` parameter ของ mutation มี 2 ตัวคือ state กับค่าที่ต้องการจะ update

   ```
    appendPet: (state, { pet, species }) => {
        state[species].push(pet);
    }

    ** state เป็น object ของ vuex
   ```

   ![vuexMutations](img/vuexMutations.PNG)

3. `actions` => เอาไว้เรียกใช้ mutations ในการ update state (`เอาไว้เป็นส่วนที่ call API ได้ response กลับมาแล้วต้องการ update ค่าให้ state ก็จะทำการเรียกใช้ mutations อีกทีนึง`)

   `Note : ` actions เป็น asynchronous function

   `Note :` commit method ของ context เอาไว้เรียกใช้ mutations

   ```
    context.commit('ชื่อ mutation ที่ต้องการเรียกใช้', ค่าที่ต้องการจะเอาไป update state)
   ```

   `Note : ` context เป็น object ของ Vuex

   `Note : ` context มันมี method commit โดย default อยู่แล้วเราสามารถใช้ Spread Operation กับ context เพื่อเอา commit มาใช้ได้ตามรูปตัวอย่างข้างล่าง

   ![vuexActions](img/vuexActions.PNG)

4. `getters` => จะเหมือนกับ computed property ของ vue instance แต่เป็นของ `Vuex Store` ใช้จัดการ property อะไรซักอย่าง ที่เอา state มาใช้ ก่อนที่จะ return state กลับไปให้ component (`เอา state มาใช้ ไม่ได้มีการ update หรือเปลี่ยนค่าให้ state`)

   `Note : ` เหตุผลที่ใช้ getters

   - เราใช้ getters เพื่อเอาไป binding ให้ component แล้วไม่อยากสร้าง state เยอะเกินความจำเป็น
   - ใช้สำหรับการ filter state
   - ใช้สำหรับ change ที่ต้องการให้ render บน DOM

   ![vuexGetters](img/vuexGetters.PNG)

   `Note :` เราสามารถส่ง getters เข้าไปใช้ใน getters ตัวอื่นได้ผ่าน parameter ตัวที่ 2

   ![vuexGetters2](img/vuexGetters2.PNG)

`Note : ` วิธีเอา vuex ไปใช้ใน component

_`Get Value จาก state`_

1. import mapState จาก vuex

   ![vuex2](img/vuex2.PNG)

2. ใช้ `spread mapState` เพื่อ call function และส่งชื่อของ `state` ที่ต้องการจะ map ใน store(`vuex`) ใน `computed property` ของ vue Instance

   ![vuex3](img/vuex3.PNG)

   `Note :` `...mapState(['state1' , 'state2' ])` argument เป็น array ของชื่อ state ที่ต้องการจะ map

3. เอา state ไป binding

   ![vuex4](img/vuex4.PNG)

4. อย่าลืม ref path store ที่เอาไปใช้ set เป็น option ของ vue instance ในไฟล์ `main.js` ให้ถูกต้องด้วย

   ![vuex6](img/vuex6.PNG) \
   `Note : ` มันจะ ref path store ไปที่ไฟล์ `index.js` ใน folder store

   ![vuex5](img/vuex5.PNG)

`Note : ` เราสามารถ get ค่าจาก state ของ store ได้ 2 แบบ (`get state ของ vuex`)

- `mapState([' '])` => แบบนี้จะเป็น standard syntax ที่นิยมใช้ เขียนสั้น จัดการง่ายเมื่อเราต้องการ get ค่าจากหลายๆ state
- `this.$store.state.ชื่อstate` => วิธีแบบลวกๆ ไม่แนะนำให้ใช้ (`ไม่ Best Practice`)

_`เรียกใช้ actions จาก vuex`_

1. import mapActions จาก vuex

   ![vuex8](img/vuex8.PNG)

2. ใช้ `spread mapActions` เพื่อ call function และส่งชื่อ actions ที่ต้องการจะใช้ใน store(`vuex`) ใน `methods property` ของ vue instance

   ![vuex7](img/vuex7.PNG)

   `Note :` `...mapActions(['action1' , 'action2' ])` argument เป็น array ของชื่อ action ที่ต้องการจะใช้

3. เรียกใช้ actions ที่ได้จาก `mapActions`

   ![vuex9](img/vuex9.PNG)

4. binding event submit

   ![vuex10](img/vuex10.PNG)

   `Note :` ถ้าไม่อยากให้มีการ refresh หน้าหลัง submit ให้ใช้ `@submit.prevent`

_`ใช้ Getters`_

1. import mapGetters จาก vuex

   ![vuex11](img/vuex11.PNG)

2. ใช้ `spread mapGetters` เพื่อ call function และส่งชื่อ getters ที่ต้องการจะใช้ใน store(`vuex`) ใน `computed property` ของ vue instance

   ![vuex12](img/vuex12.PNG)

3. เอา getters ไป binding

   ![vuex13](img/vuex13.PNG)

`Note : ` flow การทำงาน Vuex

```
component  =>   actions    =>    mutation   =>   state
          call            call            update
```

## **`Trick and Tips`**

- การใส่ `@` ในการ ref path ของไฟล์ โดย `@` หมายถึง folder `src` (`เป็น syntax ของ vue cli`)

  `Note : ` การใช้ `@` จะช่วยทำให้เราเขียน ref path file ได้สะดวกขึ้นสั้นขึ้น

- การ ref property

```
this.cats
this["cats"]

ถ้า this.$route.params.species มีค่าเท่ากับ cats
Ex. const animals = this[this.$route.params.species];
เพราะฉะนั้น animals = this["cats"] หรือ this.cats นั่นเอง
```
