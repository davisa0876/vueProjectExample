<template>
  <div class="apiTest">

    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title mb-1">{{appTitle}}:</h1>
            <div>
              <h6 class="card-title mb-1">{{subTitle}}:</h6>
            </div>
            <div class="input-group">
                <input type="text" v-model="searchurls" placeholder="Enter URLs comma separated" class="form-control">
                <span class="input-group-btn">
                  <button class="btn ripple btn-primary" type="button" @click="search">Search</button>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="card-body">
            <ul>
                <li>{{URLsLabel}}: <ul>
                              <li v-for="url in ResultData.URLsArray" :key="url">{{ url }}</li>
                          </ul>
                </li>
                <li>{{TotalURLsLabel}}: {{ ResultData.totalURLs }}</li>
                <li>{{PagesLoadTimeLabel}}: {{ ResultData.generalAverageLoadTime }}</li>
                <li>{{AverageWordCountLabel}}: {{ ResultData.generalAverageWordCount }}</li>
                <li>{{AverageTitleLengthLabel}}: {{ ResultData.generalTitleLength }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="card-body">
              <div class="table-responsive">
                  <table id= "table-to-export" class="table table-bordered table-hover mb-0 text-md-nowrap">
                          <thead>
                          <tr>
                              <th>URL</th>
                              <th>Status Code</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr v-for="statusInfo in ResultData.StatusURL" :key="statusInfo.url">
                              <td>{{ statusInfo.url }}</td>
                              <td>{{ statusInfo.statusCode }}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>


  <div v-for="item in ResultData.dataItems" :key="item.url" class="card">
       <div class="card-header">
          {{ item.url }}
      </div>
      <div class="card-body">
          <p><strong>Load Time:</strong> {{ item.LoadTime }}</p>
          <p><strong>Word Count:</strong> {{ item.WordCount }}</p>
          <p><strong>Title Length:</strong> {{ item.TitleLength }}</p>
          
          <!-- Use AccordionItem component -->
          <AccordionItem :links="item.uniqueExternalLinks" title="Unique External Links" :id="`ext-${item.url}`" @toggle="handleToggle"/>
          <AccordionItem :links="item.uniqueImages" title="Unique Images" :id="`img-${item.url}`" @toggle="handleToggle"/>
          <AccordionItem :links="item.uniqueInternalLinks" title="Unique Internal Links" :id="`int-${item.url}`" @toggle="handleToggle"/>
      </div>
</div>    


</template>

<script setup>
import { reactive, ref } from 'vue';
import AccordionItem from './AccordionItem.vue';

const appTitle = 'Crawler';
const subTitle = 'Enter URLs comma separated';
const URLsLabel = 'URLs';
const TotalURLsLabel = 'Total URLs';
const PagesLoadTimeLabel = 'Average Pages Load Time';
const AverageWordCountLabel = 'Average Word Count';
const AverageTitleLengthLabel = 'Average Title Length';


let searchurls = '';

const ResultData = reactive({
    URLsArray: [],
    totalURLs: '0',
    generalAverageLoadTime: '0',
    generalAverageWordCount: '0',
    generalTitleLength: '0',
    StatusURL: [],
    dataItems: []
});


const openedAccordionId = ref(null);
const handleToggle = (id) => {
  if (openedAccordionId.value === id) {
    openedAccordionId.value = null;
  } else {
    openedAccordionId.value = id;
  }
}

const search = async() => {
    try {
        const response = await fetch('https://challenges-393913.nn.r.appspot.com/crawl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ urls: searchurls.split(',') }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (!result || typeof result !== 'object') {
            throw new Error("Invalid result format!");
        }

        console.log(result);

        if (result.StatusURL) {
            ResultData.URLsArray = result.urls;
            ResultData.totalURLs = result.totalURLs.toString();
            ResultData.generalAverageLoadTime = (result.generalAverageLoadTime.toString()/100);
            ResultData.generalAverageWordCount = result.generalAverageWordCount.toString();
            ResultData.generalTitleLength = result.generalTitleLength.toString();
            ResultData.StatusURL = result.StatusURL;
            ResultData.dataItems = result.data;
        } else {
            console.error("Unexpected result:", result);
        }

    } catch (error) {
        console.error("There was an error fetching the ResultData:", error);
    }
};

</script>



<style>
.apiTest{
  text-align: left;
}
.row{
  margin-top: 10px;
}
 .btn, .counter{
  font-size: 15px !important;
 } 
 .form-group{
  width: 50% !important;
  margin-left: 10px !important;
  text-align: center !important;
 }

 .card-header {
    font-weight: bold;
    font-size: 1.25em;
    margin-bottom: 10px;
}
</style>



