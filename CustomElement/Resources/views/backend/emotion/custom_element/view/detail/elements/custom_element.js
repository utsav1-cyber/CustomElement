//
//{block name="backend/emotion/view/detail/elements/base"}
//{$smarty.block.parent}
Ext.define('Shopware.apps.Emotion.view.detail.elements.CustomElement', {

    /**
     * Extend from the base class for the grid elements.
     */
    extend: 'Shopware.apps.Emotion.view.detail.elements.Base',

    /**
     * Create the alias matching with the xtype you defined for your element.
     * The pattern is always 'widget.detail-element-' + xtype
     */
    alias: 'widget.detail-element-emotion-components-custom',

    /**
     * You can define an additional CSS class which will be used for the grid element.
     */
    componentCls: 'emotion--custom-element',

    /**
     * Define the path to an image for the icon of your element.
     * You could also use a base64 string.
     */
     icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABQCAYAAABLY2g8AAAABHNCSVQICAgIfAhkiAAAAF96VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAAAImeNKT81LLcpMVigoyk/LzEnlUgADYxMuE0sTS6NEAwMDCwMIMDQwMDYEkkZAtjlUKNEABZiYm6UBoblZspkpiM8FAE+6FWgbLdiMAAAEpElEQVR4nO2czU4jRxDHq2rGDkfnlqPfYJ3TRhGwzi1Hc0tOC08wsJGxPF5pYik2X1GAJwCeAOcJMLKU1Z7WeQPvLbn5CPZMVQ58CBbbMO7umYH074SEurr4d1fNdE8VCCngBUFhIQxLYchlh/AVCxUQpYSIhamDhDtIeLjTanWT8hOTmqhWC4pCo4oAvUXE0lPHCfMxSa65s9McGHRvIsbFeef7q46gF0cQgHRFucE1YdQLgoJ7MVonIg8BC3GWgBm6SLyxt93um/AtDtp3zvVO2Z+ZPyYgIsMIZeOPdvtYt0/zom3nVH2/BIJHCFiKLblwZ5TPrR02m0Nd/ujA0WFks15fR3ROEfGbuGNFZIgAAzeKvv5+efnir17vHx0+6UAprLwgKHw1Gh8BUkWXQyI8AIEuEBzutdPNO3OL4wVBIT8Kz+I+heLADF0mPkkrD80lznV+OYubdOdFRPpEsJHkCyDAHOJs1t9XBOQoKWHuwiIH47zbTCpxP1kcLwgK+cvxPhKtGvTnUUR4AAgrSeSjJz2tbvML0Y+mHXoMRCyAwE/fLS/9+6HXMyrQo+JUfb/kRHJqMvHGBREXCLDyemnxs0mBZorjBUHBieQTIhZNOaCCaYGminPnUV00MbEuTApE036Ru4wyFUqzcAT3q76v3deJ4vxSq/9KBGXdk5niKknjkRcEWl8vHohT9f2S4ziBzkmSABFLuVGo1e8H4gjTvs4JkoQQ13WG1z1x3vn+6nMKp0noXNx74jgCzy6cvoQIyrVGo6zF1s0Pm/X3FUQq6jCaNlGEWhb5zs7htzoMZgEiKNdqQVHZDsDVZxOdF1ZZIKLQU7VBAABCoxclDAAAgij/TddhhW9UDWUNRCqqhtbVzgEs63Aoa4ydcVllvFv1/RJC8rd6SUCCr5TGUwrXnYkhagdnCkMua3IlcyByUWX81CuLl4DqS+2LFkcVK84MrDgzsOLMwIozAxIHB2k7YQpm6KqMpxy+XHEIWembOiVduZAkEcvfKuOvDp4iqRcnmsB1qasy/vpUrhabWUREhqpRQQAAiHKixaMsIdJRNUEAAHvtdl+EB8oOZQhE+lPVxu17DvPL2T0iPNjd+k3PzgEACBfyB6rGsoKuhb4V57DZHLLIsxdIRIa6Fvre8WGcd5sikqkq8rgw86Gugsp7xUsfz88vFpcWLwHTr/2bBxHp/77d/lmXvQcHz92trQPVM0lqoKzpNDfxVO6Is/bcwiuKoqbu8tupdci1RqMsgmc6JzOGcGd3q72i2+zU+5ydVqsbAmvdpiYQkf5lPmfEz5mlth96vf7rpcXPBJjJb+ki0h/l3R9Mlfs/WqSdVYFMCwMQo/eh1miUmeE0jYaQLxHm473ttvGQf/Id8k6r1SV2v03zMS8iQxBYSUIYgDn7rTbr9XUBChLdRcId5NxGkq3USp16t+3RBkVihq7jSDON61zl1umrPs/RqgB6OgsuhfmYHDxJ845ba1951fdLHEkF0XkTt575pvE1IjiPcrlOFtqojf67hqrvl1CoGHE0sU5GHBzkEAcXrtvPghgWi8VisVgsFovFYrFYLBaL5f/If2wv3aRTmPqRAAAAAElFTkSuQmCC',

});
//{/block}