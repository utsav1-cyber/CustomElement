{block name="widgets_emotion_components_custom_element"}


    <div class="banner-section">
        <div class="banner-image">
            <img src="{$Data.preview_image}" alt="image">
        </div>

        <div class="banner-content">
            <div class="custom-text-element">
                <h1>{$Data.title_text}</h1>
            </div>

            <div class="description_text">
               <p>{$Data.description_text}</p>
            </div>

            <div class="button_link">
                <a href="{$Data.button_link}" class="banner-button">Button</a>
            </div>
        </div>

    </div>

{/block}