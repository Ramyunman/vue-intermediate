<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fa-solid fa-plus addBtn"></i>
        </span>

        <Modal v-if="showModal" @close="showModal = false">
            <!--
            you can use custom content here to overwrite
            default content
            -->
            <template v-slot:header>
                <h3>경고!
                    <i class="closeModalBtn fa-regular fa-circle-xmark" 
                        @click="showModal = false"></i>
                </h3>
            </template>
            <template v-slot:body>
                <h3>아무것도 입력하지 않았습니다.</h3>
            </template>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data: function() {
    return {
        newTodoItem: "",
        showModal: false
    }
  },
  methods: {
    addTodo: function() {
        if(this.newTodoItem !== '') {
            this.$emit('addTodoItem', this.newTodoItem); 
            this.cleaerInput();
        } else {
            this.showModal = !this.showModal;
        }
    },
    cleaerInput: function() {
        this.newTodoItem = '';
    }
  },
  components: {
    Modal: Modal
  }    
}

</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>