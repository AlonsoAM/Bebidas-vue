<script setup></script>
<template>
  <header>
    <div class="mx-auto container px-5 py-16">
      <div></div>
      <form
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
      >
        <div class="space-y-4">
          <label
            for="ingrediente"
            class="block text-white uppercase font-extrabold text-lg"
            >Nombre o Ingredientes</label
          >
          <input
            type="text"
            id="ingrediente"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o Ingrediente: ej. Vodka, Tequila, etc."
          />
        </div>
        <div class="space-y-4">
          <label
            for="categoria"
            class="block text-white uppercase font-extrabold text-lg"
            >Categoría</label
          >
          <select
            id="categoria"
            class="p-3 w-full rounded-lg focus:outline-none"
          >
            <option value="">-- Sleccione --</option>
          </select>
        </div>
        <input
          type="submit"
          value="Buscar Recetas"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
        />
      </form>
    </div>
  </header>
</template>

<style scoped></style>
