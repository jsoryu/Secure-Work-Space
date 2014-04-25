/*
 * File: app/view/MainECLContainer.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainECLContainer', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Panel',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.IndexBar',
        'Ext.Toolbar',
        'Ext.Spacer',
        'Ext.Button',
        'Ext.field.Text',
        'Ext.Img',
        'Ext.Label',
        'Ext.Map',
        'Ext.MessageBox'
    ],

    config: {
        fullscreen: true,
        id: 'MainECLContainer',
        layout: 'card',
        items: [
            {
                xtype: 'panel',
                id: 'ContactListPanel',
                itemId: 'ContactListPanel',
                ui: 'light',
                layout: 'fit',
                items: [
                    {
                        xtype: 'list',
                        id: 'ContactList',
                        itemId: 'ContactList',
                        ui: 'round',
                        hideOnMaskTap: false,
                        masked: {
                            xtype: 'loadmask',
                            message: 'Loading from Server'
                        },
                        itemTpl: [
                            '<div class="photoframe"><img class="photo" src="{photo_url}" width="40" height="40"/></div>',
                            '',
                            '<div class="personinfo">{lastname}, {firstname}<br><small>{position}</small></div>'
                        ],
                        store: 'PeopleStore',
                        grouped: true,
                        indexBar: true,
                        items: [
                            {
                                xtype: 'toolbar',
                                docked: 'bottom',
                                hidden: true,
                                id: 'ContactListActionBar',
                                items: [
                                    {
                                        xtype: 'spacer'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'SearchContactBtn',
                                        itemId: 'mybutton',
                                        iconCls: 'search',
                                        text: 'Search'
                                    },
                                    {
                                        xtype: 'spacer'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        id: 'ContactListPanelToolbar',
                        itemId: 'ContactListPanelToolbar',
                        ui: 'light',
                        title: 'Executive Contact List',
                        items: [
                            {
                                xtype: 'spacer'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        hidden: true,
                        id: 'SearchBar',
                        ui: 'light',
                        items: [
                            {
                                xtype: 'textfield',
                                flex: 1,
                                itemId: 'mytextfield',
                                placeHolder: 'Contact\'s Name'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'ContactDetailContainer',
                itemId: 'ContactDetailContainer',
                style: 'background-color: #f0f0f0',
                layout: 'fit',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        hidden: true,
                        id: 'ContactDetailsHeaderToolbar',
                        ui: 'light'
                    },
                    {
                        xtype: 'container',
                        id: 'ContactDetailsRootContainer',
                        scrollable: 'vertical',
                        items: [
                            {
                                xtype: 'container',
                                height: 120,
                                id: 'ContactDetailsSummaryContainer',
                                itemId: 'ContactDetailsSummaryContainer',
                                layout: {
                                    type: 'hbox',
                                    align: 'start'
                                },
                                items: [
                                    {
                                        xtype: 'image',
                                        border: 2,
                                        height: '100px',
                                        id: 'ContactImage',
                                        itemId: 'ContactImage',
                                        margin: '10px',
                                        style: 'border-color: #ccc; border-style: solid;',
                                        width: '100px',
                                        src: 'resources/images/greyman.jpg'
                                    },
                                    {
                                        xtype: 'container',
                                        id: 'ContactDetailsSummaryInfoContainer',
                                        margin: '10px',
                                        width: '100%',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'label',
                                                html: 'Full Name',
                                                id: 'ContactDetailsFullnameLabel',
                                                itemId: 'ContactDetailsFullnameLabel'
                                            },
                                            {
                                                xtype: 'label',
                                                id: 'ContactDetailsPositionLabel',
                                                itemId: 'ContactDetailsPositionLabel'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                height: 300,
                                id: 'ContactDetailsInfoContainer',
                                style: 'margin: 7px',
                                ui: '',
                                scrollable: false,
                                items: [
                                    {
                                        xtype: 'list',
                                        height: 400,
                                        id: 'DetailInfoActionList',
                                        itemId: 'mylist1',
                                        ui: 'round',
                                        itemTpl: [
                                            '<div class="photo2frame {icon2}"></div>',
                                            '<tpl if=\'label2.length &lt; 25\'><div class="personinfo">{label1}<br><small>{label2}</small></div></tpl>',
                                            '<tpl if=\'label2.length &gt; 24\'><div class="personinfo">{label1}<br><span style="font-size:75%"><small>{label2}</small></span></div></tpl>'
                                        ],
                                        store: 'ActionStore'
                                    },
                                    {
                                        xtype: 'container',
                                        hidden: true,
                                        id: 'DetailsLabelContainer',
                                        items: [
                                            {
                                                xtype: 'container',
                                                height: '50px',
                                                id: 'ContactDetailEmailRow',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'label',
                                                        flex: 1,
                                                        centered: false,
                                                        html: 'Email',
                                                        id: 'emailtitle',
                                                        style: '',
                                                        styleHtmlCls: 'ContactDetailLabel',
                                                        styleHtmlContent: true
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        flex: 2,
                                                        id: 'emaillabel',
                                                        styleHtmlCls: 'ContactDetailValueLabel',
                                                        styleHtmlContent: true
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                height: '50px',
                                                id: 'ContactDetailWorkPhoneRow',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'label',
                                                        flex: 1,
                                                        centered: false,
                                                        html: 'Work Phone',
                                                        id: 'WorkPhoneTitle',
                                                        styleHtmlCls: 'ContactDetailLabel',
                                                        styleHtmlContent: true
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        flex: 2,
                                                        id: 'workphonelabel',
                                                        styleHtmlCls: 'ContactDetailValueLabel',
                                                        styleHtmlContent: true
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                height: '50px',
                                                id: 'ContactDetailBlackBerryRow',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'label',
                                                        flex: 1,
                                                        centered: false,
                                                        html: 'BlackBerry',
                                                        id: 'blackberrytitle',
                                                        styleHtmlCls: 'ContactDetailLabel',
                                                        styleHtmlContent: true
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        flex: 2,
                                                        id: 'blackberrylabel',
                                                        styleHtmlCls: 'ContactDetailClickableValueLabel',
                                                        styleHtmlContent: true
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                height: '50px',
                                                id: 'ContactDetailLocationRow',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'label',
                                                        flex: 1,
                                                        centered: false,
                                                        html: 'Location',
                                                        id: 'locationtitle',
                                                        styleHtmlCls: 'ContactDetailLabel',
                                                        styleHtmlContent: true
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        flex: 2,
                                                        id: 'locationlabel',
                                                        styleHtmlCls: 'ContactDetailValueLabel',
                                                        styleHtmlContent: true
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                height: '50px',
                                                id: 'ContactDetailTwitterRow',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'label',
                                                        flex: 1,
                                                        centered: false,
                                                        html: 'Twitter',
                                                        id: 'twitteridtitle',
                                                        styleHtmlCls: 'ContactDetailLabel',
                                                        styleHtmlContent: true
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        flex: 2,
                                                        id: 'twitteridlabel',
                                                        styleHtmlCls: 'ContactDetailValueLabel',
                                                        styleHtmlContent: true
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        id: 'ContactDetailsFooterToolbar',
                        layout: {
                            type: 'hbox',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: 'button',
                                id: 'contactdetailsbackbutton',
                                itemId: 'contactdetailsbackbutton',
                                ui: 'back',
                                text: 'Back'
                            },
                            {
                                xtype: 'spacer'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                centered: false,
                id: 'ContactDetailsImageContainer',
                style: '',
                layout: 'card',
                modal: false,
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        hidden: true,
                        id: 'ContactDetailsImageActionBar',
                        items: [
                            {
                                xtype: 'button',
                                id: 'ContactDetailsImgBack',
                                itemId: 'mybutton1',
                                ui: 'back',
                                text: 'Back'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        centered: false,
                        id: 'ProfileImgContainer',
                        style: 'background-color: rgba(0,0,0,0.9);',
                        scrollable: false,
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                centered: false,
                                height: 200,
                                id: 'ContactDetalsProfileImage',
                                itemId: 'myimg1',
                                width: 200,
                                src: 'resources/images/greyman.jpg'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'ContactDetailMapContainer',
                ui: '',
                layout: 'fit',
                items: [
                    {
                        xtype: 'map',
                        id: 'ContactMap',
                        mapOptions: {
                            zoom: 6
                        }
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        id: 'MapActionBar',
                        items: [
                            {
                                xtype: 'button',
                                id: 'MapActionBarBtn',
                                itemId: 'mybutton3',
                                ui: 'back',
                                text: 'Back'
                            },
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    if(MyApp.globals.os=="BlackBerry 10" && (MyApp.globals.packager=="Cordova" || MyApp.globals.packager=="WebWorks")){
                                        if(Ext.getCmp('ContactDetailMapContainer').location!==null){

                                            var geolocation=Ext.getCmp('ContactDetailMapContainer').location;

                                            var mapsArgs = JSON.stringify(
                                            {
                                                "center": {
                                                    "latitude": geolocation.lat,
                                                    "longitude": geolocation.lng,
                                                    "altitude": 50000
                                                }
                                            }

                                            );

                                            console.log("Map args:"+mapsArgs);

                                            blackberry.invoke.invoke({
                                                action: "bb.action.OPEN",
                                                type: "application/vnd.rim.map.action-v1",
                                                data: mapsArgs
                                            });
                                        }
                                        else{
                                            Ext.Msg.alert('Error', 'Sorry, there is valid location.', Ext.emptyFn);
                                            console.log("no geolocation data!");
                                        }
                                        return;
                                    }
                                    else if(MyApp.globals.os=="iOS" && MyApp.globals.packager=="Cordova"){
                                        window.open('http://maps.apple.com/?q='+this.query, '_system');
                                        return;
                                    }
                                    else{ // should never occur
                                        Ext.Msg.alert('Error', 'Sorry, there is no supported maps app.', Ext.emptyFn);
                                        console.log(this);
                                        return;
                                    }
                                },
                                hidden: true,
                                iconCls: 'maps',
                                text: 'Maps'
                            },
                            {
                                xtype: 'spacer'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onContactListItemTap',
                event: 'itemtap',
                delegate: '#ContactList'
            },
            {
                fn: 'onSearchContactBtnTap',
                event: 'tap',
                delegate: '#SearchContactBtn'
            },
            {
                fn: 'onMytextfieldBlur',
                event: 'blur',
                delegate: '#mytextfield'
            },
            {
                fn: 'onMytextfieldKeyup',
                event: 'keyup',
                delegate: '#mytextfield'
            },
            {
                fn: 'onContactImageTap',
                event: 'tap',
                delegate: '#ContactImage'
            },
            {
                fn: 'onDetailInfoActionListItemTap',
                event: 'itemtap',
                delegate: '#DetailInfoActionList'
            },
            {
                fn: 'onBackButtonTap',
                event: 'tap',
                delegate: '#contactdetailsbackbutton'
            },
            {
                fn: 'onContactDetailsImgBackTap',
                event: 'tap',
                delegate: '#ContactDetailsImgBack'
            },
            {
                fn: 'onContactDetalsProfileImageTap',
                event: 'tap',
                delegate: '#ContactDetalsProfileImage'
            },
            {
                fn: 'onMapActionBarBtnTap',
                event: 'tap',
                delegate: '#MapActionBarBtn'
            }
        ]
    },

    onContactListItemTap: function(dataview, index, target, record, e, eOpts) {
        // Event handler - Each item tap

        var contactlist = this.down('#ContactList');
        var contactdetailscontainer = this.down('#ContactDetailContainer');
        var contactdetailsinfocontainer = this.down('#ContactDetailsInfoContainer');
        var data = record.data;

        contactlist.fireEvent('loadAndShowDetails', contactlist, contactdetailscontainer,
        contactdetailsinfocontainer, data);


        // **** new items
        // todo: delete event listeners

        var that = this;

        contactdetailscontainer.element.on('swipe', function(e){
            if(e.direction=='right'){
                that.onBackButtonTap();
            }
        });

        this.down('#ContactListActionBar').hide();
    },

    onSearchContactBtnTap: function(button, e, eOpts) {
        var searchbar = Ext.getCmp('SearchBar');
        if(searchbar.getHidden()){
            searchbar.show(true);
        }
        if(!searchbar.getHidden()){
            searchbar.hide();
        }
    },

    onMytextfieldBlur: function(textfield, e, eOpts) {
        Ext.getCmp('SearchBar').hide();
    },

    onMytextfieldKeyup: function(textfield, e, eOpts) {
        var value = textfield.getValue();
        if (value && value.length) {
            var filter = [{
                filterFn: function(record) {
                    var firstName = record.get('firstname').toLowerCase(),
                    lastName = record.get('lastname').toLowerCase();

                    if (firstName.match(value) || lastName.match(value)) {
                        return true;
                    }
                    return false;
                }
            }];

            Ext.getStore('PeopleStore').filter(filter);
        }
        else {
            Ext.getStore('PeopleStore').clearFilter();
        }

    },

    onContactImageTap: function(image, e, eOpts) {
        that = this;

        if(image.getSrc()=='resources/images/greyman.jpg'){
            return;
        }

        var imgContainer = this.down('#ContactDetailsImageContainer');
        this.animateActiveItem(imgContainer,
        {type: 'slide'}
        );

        var imageactionbar = this.down('#ContactDetailsImageActionBar');
        imageactionbar.hide();


        imgContainer.element.on('swipe', function(e){
            if(e.direction=='right'){
                that.onContactDetailsImgBackTap();
            }
        });
        imgContainer.element.on('tap', function(e){
            if(imageactionbar.getHidden()==true){
            	imageactionbar.show(true);
            }
            else {
                imageactionbar.hide();
            }
        });


        that=this;
        Ext.Function.defer(function(){

            if(that.getActiveItem().id==imgContainer.id){
                imageactionbar.show(true);
            }
        }, 5000);

    },

    onDetailInfoActionListItemTap: function(dataview, index, target, record, e, eOpts) {
        var data=record.data;
        console.log(data.action);
        if(data.action=="email"){
            Ext.Msg.confirm('Compose Email', 'Leave this Application and Compose a new email',
            function ( answer ) {
                if ( answer == 'yes') {
                    window.location=('mailto:'+data.location);
                }
            });
        }
        else if(data.action=="call"){
            Ext.Msg.confirm('Call Phone', 'Do you want to call this phone '+data.location,
            function ( answer ) {
                if ( answer == 'yes') {
                    window.location=('tel:'+data.location);
                }
            }
            );
        }
        else if(data.action=="bbm"){
            if(MyApp.globals.os=="BlackBerry 10"){
                if(blackberry && blackberry.invoke){
                    blackberry.invoke.invoke({
                        action: 'bb.action.BBMCHAT',
                        uri: 'pin:' + data.bbmpin
                    });
                }
            }
            else{
                Ext.Msg.alert('BBM', 'This functionality will be added when the BBM API for '+MyApp.globals.os+" will be available");
            }
        }
        else if(data.action=="sms"){
            Ext.Msg.confirm('Text', 'Do you want to Text '+data.location+"?",
            function ( answer ) {
                if ( answer == 'yes') {
                    window.location=('sms:'+data.location);
                }
            }
            );
        }
        else if(data.action=="map"){
            var query = encodeURIComponent(data.location);
            console.log(MyApp.globals.os);

            if(Ext.getCmp('ContactDetailMapContainer').location!==null){
                console.log(Ext.getCmp('ContactDetailMapContainer').location);
            }

            if(MyApp.globals.os=="iOS"){
                nativeIcon = Ext.getCmp('nativeMapsIcon');
                nativeIcon.query=query;
                if(MyApp.globals.packager=="Cordova") nativeIcon.show(true);
                var contactdetailmapcontainer = Ext.getCmp('ContactDetailMapContainer');
                Ext.getCmp('ContactMap').getMap().panTo(Ext.getCmp('ContactDetailMapContainer').location);

                this.animateActiveItem(contactdetailmapcontainer, {
                    type: 'slide',
                    direction: 'left'
                });

                return;

            }
            else if(MyApp.globals.os=="BlackBerry 10" && MyApp.globals.packager=="WebWorks"){
                nativeIcon = Ext.getCmp('nativeMapsIcon');

                nativeIcon.show(true);

                var contactdetailmapcontainer = Ext.getCmp('ContactDetailMapContainer');
                Ext.getCmp('ContactMap').getMap().panTo(Ext.getCmp('ContactDetailMapContainer').location);

                this.animateActiveItem(contactdetailmapcontainer, {
                    type: 'slide',
                    direction: 'left'
                });

                return;

            }
            else{

                var contactdetailmapcontainer = Ext.getCmp('ContactDetailMapContainer');
                Ext.getCmp('ContactMap').getMap().panTo(Ext.getCmp('ContactDetailMapContainer').location);

                this.animateActiveItem(contactdetailmapcontainer, {
                    type: 'slide',
                    direction: 'left'
                });

                return;
            }
        }
        else if(data.action=="twitter"){
            var twitterAddress = data.location;
            if(twitterAddress!==null && twitterAddress.length > 1){
                window.open('http://www.twitter.com/'+twitterAddress.replace("@",""),'_system');

            }
            else{
                console.log("error: Twitter address nonexistant - "+data.location);
            }
        }
    },

    onBackButtonTap: function(button, e, eOpts) {
        var contactlistpanel = this.down('#ContactListPanel');
        Ext.getCmp('ContactListActionBar').hide();

        this.animateActiveItem(contactlistpanel, {
            type: 'slide',
            direction: 'right'
        });

        var contactimage = this.down('#ContactImage');
        contactimage.setSrc("resources/images/greyman.jpg");


        // clear listeners
        var blackberryfield = this.down("#blackberrylabel");
        blackberryfield.element.clearListeners();

        var emailfield = this.down("#emaillabel");
        emailfield.element.clearListeners();

        var phonefield = this.down("#workphonelabel");
        phonefield.element.clearListeners();

        // ContactDetailsPositionLabel
        var contactdetailspositionlabel = this.down("#ContactDetailsPositionLabel");
        contactdetailspositionlabel.setHtml("");

        var contactdetailscontainer = this.down('#ContactDetailContainer');
        contactdetailscontainer.element.clearListeners();

        var contactdetailsrootcontainer = this.down('#ContactDetailsRootContainer');

        contactdetailsrootcontainer.getScrollable().refresh();
        contactdetailsrootcontainer.getScrollable().getScroller().scrollTo(0,0, false);

    },

    onContactDetailsImgBackTap: function(button, e, eOpts) {
        var contactdetailcontainer = this.down('#ContactDetailContainer');
        this.animateActiveItem(contactdetailcontainer, {
            type: 'slide',
            direction: 'right'
        });


        var imgContainer = this.down('#ContactDetailsImageContainer');
        imgContainer.element.clearListeners();
    },

    onContactDetalsProfileImageTap: function(image, e, eOpts) {
        var imageactionbar = this.down('#ContactDetailsImageActionBar');
        imageactionbar.show(true);
    },

    onMapActionBarBtnTap: function(button, e, eOpts) {
        var contactdetailcontainer = this.down('#ContactDetailContainer');
        this.animateActiveItem(contactdetailcontainer, {
            type: 'slide',
            direction: 'right'
        });

    },

    initialize: function() {
        this.callParent();

        var storeAutoload = {
            callback: function(el, succ, resp, opts)
            {
                console.log(succ.success);
                if(succ.success===false){
                    Ext.Msg.alert(
                                "Internet Required",
                                "This app requires access to the internet. Please close this app and reopen when you have interent access"
                                );
                }
            }
        };

        var peoplestore = Ext.getStore("PeopleStore");

        peoplestore.getProxy().setUrl(appSettings.userlist_url);
        peoplestore.setAutoLoad(storeAutoload);
        //peoplestore.load();

    }

});