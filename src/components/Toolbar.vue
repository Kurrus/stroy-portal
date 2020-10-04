<template>
  <div class="toolbar">
    <div class="_container">
      <div class="toolbar__location">
        <a href="/">
          <img src="../assets/img/icons/icons.svg#loc" class="svg-loc-dims" alt="loc">
          <span>Волгоградская область</span>
        </a>
      </div>
      <div class="toolbar__list">
        <ul class="toolbar__lists">
          <li><a href="#">Тендеры</a></li>
          <li><a href="#">База подрядчиков</a></li>
          <li class="toolbar__list-menu" @click="active = !active">
            <span>Другие сервисы <img src="../assets/img/icons/icons.svg#chevron" alt=""></span>
            <ul :class="{_active: active}">
              <li><a href="#">Тендеры</a></li>
              <li><a href="#">База подрядчиков</a></li>
              <li><a href="#">Тендеры</a></li>
              <li><a href="#">База подрядчиков</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data(){
    return {
      active: false
    }
  }
}
</script>

