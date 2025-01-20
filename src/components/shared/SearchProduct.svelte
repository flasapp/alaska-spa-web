<script>
  //Svelte Core
  import { onDestroy, onMount } from "svelte"
  //Components and Stores
  // import { get } from "@/lib/api/methods-local"
  import General from "@/stores/General"

  const NUMBER_CHAR_TO_SEARCH = 1

  let productName = ""
  let products = []
  let loading = false
  let seachDone = false

  function hideMe() {
    let timer = setTimeout(() => {
      General.update((data) => {
        data.searchingProducts = false
        return data;
      });
    }, 200)
  }

  function delay(callback, ms) {
    var timer = 0;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }

  function setProduct(product) {
    General.update((data) => {
      data.selectedProduct = product
      return data;
    });
  }

  async function searchProductsByName() {
    if (productName?.length == 0) {
      products = [];
      seachDone = false;
    }

    if (productName?.length > NUMBER_CHAR_TO_SEARCH) {
      loading = true;
      products = [];
      let resp = []
      // let resp = await get(`/api/products/search?name=${productName}`)
      products = resp.length >= 0 ? resp : []
      loading = false;
      seachDone = true;
    }
  }
  onMount(() => {
    if($General.searchingName){
      productName = $General.searchingName;
      searchProductsByName();
    }
  });
  onDestroy(() => {
    $General.searchingName = productName;
    $General.searchingProductsList = products;
  });
</script>

<div class="">
  <div
    class="searching-container fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24"
  >
    <div class="fixed inset-0 bg-slate-900/25 animation-blur"></div>
    <div
      class="relative w-full max-w-lg transform px-4 transition-all opacity-100 scale-100"
      style="z-index:1"
    >
      <!-- Search Input -->
      <div 
        class="
          search-container-input overflow-hidden rounded-t-lg bg-white shadow-md 
          {productName.length > NUMBER_CHAR_TO_SEARCH && !loading && seachDone ? 'rounded-b-none' : 'rounded-b-lg'}
        "
      >
        <div class="relative">
          <form>
            <input
              class="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6"
              placeholder="Buscar producto..."
              style="caret-color: rgb(107, 114, 128);"
              autofocus
              type="text"
              bind:value={productName}
              on:keyup={delay(searchProductsByName, 500)}
              on:blur={hideMe}
            />
            {#if loading && productName.length > NUMBER_CHAR_TO_SEARCH}
              <span
                class="pointer-events-none absolute right-4 top-4 h-6 w-6 loading loading-spinner loading-lg"
              ></span>
            {:else}
              <svg
                class="pointer-events-none absolute right-4 top-4 h-6 w-6 fill-slate-400"
              >
                <path
                  d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"
                ></path>
              </svg>
            {/if}
          </form>
        </div>
      </div>
      <!-- Search Results -->
      <div
        class="min-h-[40rem] max-h-[40rem] divide-y divide-slate-200 overflow-x-hidden overflow-y-auto rounded-b-lg text-sm leading-6 {products.length >
        0
          ? 'border-t border-slate-200'
          : ''}"
        role="listbox"
        style="--input-width: 480.0000305175781px; --button-width: 0px;"
      >
        {#each products as product, index}
          <a
            href="/products/{product.url}"
            on:click={setProduct(product)}
            alt={product.title}
          >
            <div
              class="cursor-pointer flex items-center justify-between p-4 bg-slate-50 hover:bg-base-100 transition-all duration-200"
              role="option"
              tabindex="-1"
            >
              <div class="whitespace-nowrap w-4/5">
                <span class="font-semibold text-sky-600 block w-4/5 truncate"
                  >{product.title}</span
                >
                <span class="text-slate-600 block w-3/4 truncate"
                  >{product.description}</span
                >
              </div>

              <span class="ml-4 text-right text-xs text-slate-600">
                <svg
                  class="h-6 w-6 fill-current md:h-8 md:w-8 rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                  ></path>
                </svg>
              </span>
            </div>
          </a>
        {/each}
        {#if products.length == 0 && productName.length > NUMBER_CHAR_TO_SEARCH && !loading && seachDone}
          <div
            class="flex items-center justify-between p-4 bg-slate-50 hover:bg-base-100 transition-all duration-200"
            role="option"
            tabindex="-1"
          >
            <div class="whitespace-nowrap">
              <!-- <a class="font-semibold text-sky-600" href="#">{product.title}</a><br> -->
              <span class="text-slate-600"
                >No hemos encontrado productos con esa descripción</span
              >
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .search-container-input {
    /* -webkit-animation: fade-in .3s; */
  }
  .searching-container {
    -webkit-animation: fade-in 0.3s;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .animation-blur {
    -webkit-animation: blur 1000ms 0ms forwards;
  }
  @keyframes blur {
    from {
      backdrop-filter: blur(0px);
    }
    to {
      backdrop-filter: blur(2px);
    }
  }
</style>
