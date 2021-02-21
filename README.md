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
