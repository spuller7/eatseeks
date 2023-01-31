<template>
    <div class="relative items-top min-h-screen bg-gray-100">
        <Header/>
        <div class="max-w-container mx-auto p-4">
            <SearchCard/>
        </div>
        
        <div class="card search-card" >
            <div class="card-body">
                <div class="container">
                    <div class="row" style="margin-bottom: 0px;">
                        
                        <div class="col-8" style="display: flex;">
                            <div class="autocomplete" style="display:inline-flex; margin-left:auto;align-items: center;">
                                <input id="suggestionInput" type="text" style="width: 20vw; margin-left: auto;" class="form-control" name="" value='' data-place_id='' placeholder='Search For Your Favorite Spots'>
                                <button id="recommendButton" class="btn btn-dark" style="white-space: nowrap;" disabled>
                                    Recommend
                                </button>
                                    
                                
                                <div class="autocomplete-items-loader hidden">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="text" class="form-control" id="cityInput" name="city" value='Ann Arbor, Michigan'>
        <input type="hidden" id="cityPlaceID" name="cityPlaceID" value='ChIJMx9D1A2wPIgR4rXIhkb5Cds'>

        <div id="exploreButton" class="btn btn-labeled" style="height: calc(1.5em + .75rem + 2px); background: linear-gradient(135deg,#ff690f 0%,#e8381b 100%); color: #ffffff; width: 100%;">Explore</div>
    </div>
</template>