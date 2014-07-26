(function (Modernizr, WURFL) {
    'use strict';

    var formFactors = [
      'Desktop',
      'App',
      'Tablet',
      'Smartphone',
      'Feature Phone',
      'Smart-TV',
      'Robot',
      'Other non-Mobile',
      'Other Mobile'
    ];

    function addFormFactorTest(formFactor) {
      Modernizr.addTest(formFactor.toLowerCase().replace(/[\s-]/g, '_'), function () {
        return WURFL.form_factor === formFactor;
      });
    }

    formFactors.forEach(addFormFactorTest);

    Modernizr.addTest('is_mobile', function () {
      return WURFL.is_mobile;
    });

    Modernizr.addTest('iphone', function () {
      return WURFL.is_mobile && WURFL.form_factor === 'Smartphone' && WURFL.complete_device_name.indexOf('Apple') !== -1;
    });

    Modernizr.addTest('ipad', function () {
      return WURFL.is_mobile && WURFL.form_factor === 'Tablet' && WURFL.complete_device_name.indexOf('Apple') !== -1;
    });

    Modernizr.addTest('android', function () {
      return WURFL.is_mobile && WURFL.complete_device_name.indexOf('Apple') === -1;
    });

})(Modernizr, WURFL);
