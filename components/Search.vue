<template>
    <div class="relative items-top min-h-screen bg-gray-100">
        <div class="card search-card" style="background: linear-gradient(145deg, #2E3243 0%, #2F77D6 100%);">
            <div class="card-body">
                <div class="container">
                    <div class="row" style="margin-bottom: 0px;">
                        <div class="col-4">
                            <div class="title text-white"><b>EAT</b>SEEKS</div>
                        </div>
                        <div class="col-8" style="display: flex;">
                            <div class="autocomplete" style="display:inline-flex; margin-left:auto;align-items: center;">
                                <input id="suggestionInput" type="text" style="width: 20vw; margin-left: auto;" class="form-control" name="" value='' data-place_id='' placeholder='Search For Your Favorite Spots'>
                                <button id="recommendButton" class="btn btn-dark" style="white-space: nowrap;" disabled>
                                    Recommend
                                    <div id="recommend-loader" class="button-svg" style="display:none">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                                            <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                                            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                            </rect>
                                            <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                            </rect>
                                            <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                                            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                            </rect>
                                        </svg>
                                    </div>
                                    <div id="recommend-checkmark" class="button-svg" style="display: none">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve">
                                        <path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4
                                            C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/>
                                        </svg>
                                    </div>
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