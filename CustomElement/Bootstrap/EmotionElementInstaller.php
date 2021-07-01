<?php

namespace CustomElement\Bootstrap;

use Shopware\Components\Emotion\ComponentInstaller;

class EmotionElementInstaller
{
    /**
     * @var ComponentInstaller
     */
    private $emotionComponentInstaller;

    /**
     * @var string
     */
    private $pluginName;

    /**
     * @param string $pluginName
     * @param ComponentInstaller $emotionComponentInstaller
     */
    public function __construct($pluginName, ComponentInstaller $emotionComponentInstaller)
    {
        $this->emotionComponentInstaller = $emotionComponentInstaller;
        $this->pluginName = $pluginName;
    }

    public function install()
    {
        $customElement = $this->emotionComponentInstaller->createOrUpdate(
            $this->pluginName,
            'CustomElement',
            [
                'name' => 'Custom Element',
                'xtype' => 'emotion-components-custom',
                'template' => 'emotion_custom',
                'cls' => 'emotion-custom-element'
            ]
        );

        $customElement->createMediaField([
            'name' => 'preview_image',
            'fieldLabel' => 'Banner Image',
            'valueField' => 'virtualPath'
        ]);

        $customElement->createTextField([
            'name' => 'title_text',
            'fieldLabel' => 'Title',
            'supportText' => 'Text Field.',
            'allowBlank' => false
        ]);

        $customElement->createtinymcefield([
            'name' => 'description_text',
            'fieldLabel' => 'Description',
        ]);

        $customElement->createTextField([
            'name' => 'button_link',
            'fieldLabel' => 'Button Link',
            'supportText' => 'example: https://your-domain.com/'
        ]);

    }
}