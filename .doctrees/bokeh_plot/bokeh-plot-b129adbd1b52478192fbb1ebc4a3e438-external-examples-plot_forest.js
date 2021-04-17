(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("5f490e07-eee7-4bf6-9642-6abfbc12b5d5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5f490e07-eee7-4bf6-9642-6abfbc12b5d5' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"7dccfd44-2dd7-4692-9da9-18069f50509e":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"17963"}},"id":"17957","type":"BoxZoomTool"},{"attributes":{"source":{"id":"18039"}},"id":"18043","type":"CDSView"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"18125"},"selection_policy":{"id":"18126"}},"id":"18009","type":"ColumnDataSource"},{"attributes":{},"id":"17948","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18061","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18036","type":"Line"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"18155"},"selection_policy":{"id":"18156"}},"id":"18084","type":"ColumnDataSource"},{"attributes":{},"id":"18122","type":"UnionRenderers"},{"attributes":{},"id":"17943","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18051","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18080","type":"Line"},{"attributes":{"children":[[{"id":"17938"},0,0]]},"id":"18160","type":"GridBox"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"18147"},"selection_policy":{"id":"18148"}},"id":"18064","type":"ColumnDataSource"},{"attributes":{},"id":"18150","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"18161"},"toolbar_location":"above"},"id":"18162","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"18104"},"major_label_policy":{"id":"18106"},"ticker":{"id":"17948"}},"id":"17947","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18029"},"glyph":{"id":"18030"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18031"},"view":{"id":"18033"}},"id":"18032","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"18113"},"selection_policy":{"id":"18114"}},"id":"17979","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18009"}},"id":"18013","type":"CDSView"},{"attributes":{},"id":"18120","type":"UnionRenderers"},{"attributes":{},"id":"17945","type":"LinearScale"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18025","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18066","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18030","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"18157"},"selection_policy":{"id":"18158"}},"id":"18089","type":"ColumnDataSource"},{"attributes":{},"id":"18116","type":"UnionRenderers"},{"attributes":{"source":{"id":"18054"}},"id":"18058","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18071","type":"Line"},{"attributes":{},"id":"18125","type":"Selection"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"18037"},{"id":"18042"},{"id":"18047"},{"id":"18052"},{"id":"18057"},{"id":"18062"},{"id":"18067"},{"id":"18072"},{"id":"18077"},{"id":"18082"},{"id":"18087"},{"id":"18092"}]},"id":"18102","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18045","type":"Circle"},{"attributes":{},"id":"18128","type":"UnionRenderers"},{"attributes":{"source":{"id":"17974"}},"id":"17978","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18046","type":"Circle"},{"attributes":{},"id":"18126","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18074"},"glyph":{"id":"18075"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18076"},"view":{"id":"18078"}},"id":"18077","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18019"}},"id":"18023","type":"CDSView"},{"attributes":{},"id":"18119","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18055","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18091","type":"Circle"},{"attributes":{},"id":"17955","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18026","type":"Line"},{"attributes":{"data_source":{"id":"18034"},"glyph":{"id":"18035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18036"},"view":{"id":"18038"}},"id":"18037","type":"GlyphRenderer"},{"attributes":{},"id":"18134","type":"UnionRenderers"},{"attributes":{"source":{"id":"18044"}},"id":"18048","type":"CDSView"},{"attributes":{},"id":"18133","type":"Selection"},{"attributes":{},"id":"18151","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18041","type":"Line"},{"attributes":{},"id":"18124","type":"UnionRenderers"},{"attributes":{},"id":"18157","type":"Selection"},{"attributes":{},"id":"17960","type":"UndoTool"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"18135"},"selection_policy":{"id":"18136"}},"id":"18034","type":"ColumnDataSource"},{"attributes":{},"id":"18158","type":"UnionRenderers"},{"attributes":{"source":{"id":"18059"}},"id":"18063","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18090","type":"Circle"},{"attributes":{},"id":"17961","type":"SaveTool"},{"attributes":{"data_source":{"id":"18079"},"glyph":{"id":"18080"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18081"},"view":{"id":"18083"}},"id":"18082","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18056","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18020","type":"Line"},{"attributes":{},"id":"18156","type":"UnionRenderers"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"18097","type":"DataRange1d"},{"attributes":{"callback":null},"id":"17962","type":"HoverTool"},{"attributes":{"data_source":{"id":"18009"},"glyph":{"id":"18010"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18011"},"view":{"id":"18013"}},"id":"18012","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18064"},"glyph":{"id":"18065"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18066"},"view":{"id":"18068"}},"id":"18067","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18086","type":"Line"},{"attributes":{"data_source":{"id":"18044"},"glyph":{"id":"18045"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18046"},"view":{"id":"18048"}},"id":"18047","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"17977"},{"id":"17982"},{"id":"17987"},{"id":"17992"},{"id":"17997"},{"id":"18002"},{"id":"18007"},{"id":"18012"},{"id":"18017"},{"id":"18022"},{"id":"18027"},{"id":"18032"}]},"id":"18101","type":"LegendItem"},{"attributes":{"source":{"id":"17979"}},"id":"17983","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18040","type":"Line"},{"attributes":{},"id":"18136","type":"UnionRenderers"},{"attributes":{"text":"94.0% HDI"},"id":"18094","type":"Title"},{"attributes":{"source":{"id":"18014"}},"id":"18018","type":"CDSView"},{"attributes":{"source":{"id":"18074"}},"id":"18078","type":"CDSView"},{"attributes":{},"id":"18152","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17979"},"glyph":{"id":"17980"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17981"},"view":{"id":"17983"}},"id":"17982","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18010","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18085","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18139"},"selection_policy":{"id":"18140"}},"id":"18044","type":"ColumnDataSource"},{"attributes":{},"id":"18123","type":"Selection"},{"attributes":{"toolbars":[{"id":"17965"}],"tools":[{"id":"17955"},{"id":"17956"},{"id":"17957"},{"id":"17958"},{"id":"17959"},{"id":"17960"},{"id":"17961"},{"id":"17962"}]},"id":"18161","type":"ProxyToolbar"},{"attributes":{},"id":"17956","type":"PanTool"},{"attributes":{"overlay":{"id":"17964"}},"id":"17959","type":"LassoSelectTool"},{"attributes":{"source":{"id":"18049"}},"id":"18053","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18031","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18011","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18075","type":"Circle"},{"attributes":{"data_source":{"id":"18054"},"glyph":{"id":"18055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18056"},"view":{"id":"18058"}},"id":"18057","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18089"},"glyph":{"id":"18090"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18091"},"view":{"id":"18093"}},"id":"18092","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"18137"},"selection_policy":{"id":"18138"}},"id":"18039","type":"ColumnDataSource"},{"attributes":{},"id":"18155","type":"Selection"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18131"},"selection_policy":{"id":"18132"}},"id":"18024","type":"ColumnDataSource"},{"attributes":{},"id":"18127","type":"Selection"},{"attributes":{"data_source":{"id":"18084"},"glyph":{"id":"18085"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18086"},"view":{"id":"18088"}},"id":"18087","type":"GlyphRenderer"},{"attributes":{"ticks":[1.275]},"id":"18098","type":"FixedTicker"},{"attributes":{},"id":"18154","type":"UnionRenderers"},{"attributes":{},"id":"18131","type":"Selection"},{"attributes":{"data_source":{"id":"18049"},"glyph":{"id":"18050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18051"},"view":{"id":"18053"}},"id":"18052","type":"GlyphRenderer"},{"attributes":{},"id":"18132","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"18101"},{"id":"18102"}],"location":"top_left"},"id":"18100","type":"Legend"},{"attributes":{"data_source":{"id":"18059"},"glyph":{"id":"18060"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18061"},"view":{"id":"18063"}},"id":"18062","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"18149"},"selection_policy":{"id":"18150"}},"id":"18069","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"17985","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18016","type":"Circle"},{"attributes":{},"id":"18118","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18076","type":"Circle"},{"attributes":{"axis":{"id":"17951"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"17954","type":"Grid"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"18141"},"selection_policy":{"id":"18142"}},"id":"18049","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18079"}},"id":"18083","type":"CDSView"},{"attributes":{"bounds":"auto","min_interval":1},"id":"18096","type":"DataRange1d"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18129"},"selection_policy":{"id":"18130"}},"id":"18019","type":"ColumnDataSource"},{"attributes":{},"id":"18130","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18065","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18070","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18021","type":"Line"},{"attributes":{},"id":"18129","type":"Selection"},{"attributes":{},"id":"18108","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18060","type":"Circle"},{"attributes":{"source":{"id":"18064"}},"id":"18068","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18050","type":"Line"},{"attributes":{"source":{"id":"18084"}},"id":"18088","type":"CDSView"},{"attributes":{},"id":"18114","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18127"},"selection_policy":{"id":"18128"}},"id":"18014","type":"ColumnDataSource"},{"attributes":{},"id":"18117","type":"Selection"},{"attributes":{},"id":"18121","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18081","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18035","type":"Line"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"18143"},"selection_policy":{"id":"18144"}},"id":"18054","type":"ColumnDataSource"},{"attributes":{},"id":"18115","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17980","type":"Line"},{"attributes":{"source":{"id":"18029"}},"id":"18033","type":"CDSView"},{"attributes":{},"id":"18135","type":"Selection"},{"attributes":{"data_source":{"id":"18014"},"glyph":{"id":"18015"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18016"},"view":{"id":"18018"}},"id":"18017","type":"GlyphRenderer"},{"attributes":{},"id":"18149","type":"Selection"},{"attributes":{"data_source":{"id":"17974"},"glyph":{"id":"17975"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17976"},"view":{"id":"17978"}},"id":"17977","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18089"}},"id":"18093","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18145"},"selection_policy":{"id":"18146"}},"id":"18059","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18039"},"glyph":{"id":"18040"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18041"},"view":{"id":"18043"}},"id":"18042","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18069"},"glyph":{"id":"18070"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18071"},"view":{"id":"18073"}},"id":"18072","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18115"},"selection_policy":{"id":"18116"}},"id":"17984","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18034"}},"id":"18038","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18151"},"selection_policy":{"id":"18152"}},"id":"18074","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18024"}},"id":"18028","type":"CDSView"},{"attributes":{},"id":"17958","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"18024"},"glyph":{"id":"18025"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18026"},"view":{"id":"18028"}},"id":"18027","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18069"}},"id":"18073","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17981","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18133"},"selection_policy":{"id":"18134"}},"id":"18029","type":"ColumnDataSource"},{"attributes":{},"id":"18137","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18015","type":"Circle"},{"attributes":{},"id":"18138","type":"UnionRenderers"},{"attributes":{"source":{"id":"18004"}},"id":"18008","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"17955"},{"id":"17956"},{"id":"17957"},{"id":"17958"},{"id":"17959"},{"id":"17960"},{"id":"17961"},{"id":"17962"}]},"id":"17965","type":"Toolbar"},{"attributes":{},"id":"18145","type":"Selection"},{"attributes":{"data_source":{"id":"17989"},"glyph":{"id":"17990"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17991"},"view":{"id":"17993"}},"id":"17992","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17963","type":"BoxAnnotation"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18005","type":"Line"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"18123"},"selection_policy":{"id":"18124"}},"id":"18004","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17996","type":"Line"},{"attributes":{"source":{"id":"17984"}},"id":"17988","type":"CDSView"},{"attributes":{},"id":"18141","type":"Selection"},{"attributes":{},"id":"18144","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"18107"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"18108"},"ticker":{"id":"18098"}},"id":"17951","type":"LinearAxis"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"18119"},"selection_policy":{"id":"18120"}},"id":"17994","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18006","type":"Line"},{"attributes":{},"id":"18140","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18000","type":"Circle"},{"attributes":{},"id":"18142","type":"UnionRenderers"},{"attributes":{"source":{"id":"17999"}},"id":"18003","type":"CDSView"},{"attributes":{"data_source":{"id":"18019"},"glyph":{"id":"18020"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18021"},"view":{"id":"18023"}},"id":"18022","type":"GlyphRenderer"},{"attributes":{},"id":"18153","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"17986","type":"Circle"},{"attributes":{},"id":"18113","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17990","type":"Line"},{"attributes":{},"id":"18139","type":"Selection"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"18153"},"selection_policy":{"id":"18154"}},"id":"18079","type":"ColumnDataSource"},{"attributes":{},"id":"18147","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17976","type":"Line"},{"attributes":{},"id":"18112","type":"UnionRenderers"},{"attributes":{},"id":"18148","type":"UnionRenderers"},{"attributes":{},"id":"18106","type":"AllLabels"},{"attributes":{},"id":"18111","type":"Selection"},{"attributes":{},"id":"18146","type":"UnionRenderers"},{"attributes":{},"id":"18104","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"17989"}},"id":"17993","type":"CDSView"},{"attributes":{"children":[{"id":"18162"},{"id":"18160"}]},"id":"18163","type":"Column"},{"attributes":{},"id":"18107","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18001","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17964","type":"PolyAnnotation"},{"attributes":{},"id":"18143","type":"Selection"},{"attributes":{"above":[{"id":"18100"}],"below":[{"id":"17947"}],"center":[{"id":"17950"},{"id":"17954"}],"height":348,"left":[{"id":"17951"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"17977"},{"id":"17982"},{"id":"17987"},{"id":"17992"},{"id":"17997"},{"id":"18002"},{"id":"18007"},{"id":"18012"},{"id":"18017"},{"id":"18022"},{"id":"18027"},{"id":"18032"},{"id":"18037"},{"id":"18042"},{"id":"18047"},{"id":"18052"},{"id":"18057"},{"id":"18062"},{"id":"18067"},{"id":"18072"},{"id":"18077"},{"id":"18082"},{"id":"18087"},{"id":"18092"}],"title":{"id":"18094"},"toolbar":{"id":"17965"},"toolbar_location":null,"width":450,"x_range":{"id":"18096"},"x_scale":{"id":"17943"},"y_range":{"id":"18097"},"y_scale":{"id":"17945"}},"id":"17938","subtype":"Figure","type":"Plot"},{"attributes":{"data":{},"selected":{"id":"18121"},"selection_policy":{"id":"18122"}},"id":"17999","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17999"},"glyph":{"id":"18000"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18001"},"view":{"id":"18003"}},"id":"18002","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17994"},"glyph":{"id":"17995"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17996"},"view":{"id":"17998"}},"id":"17997","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"17947"},"ticker":null},"id":"17950","type":"Grid"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17975","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17995","type":"Line"},{"attributes":{"data_source":{"id":"17984"},"glyph":{"id":"17985"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17986"},"view":{"id":"17988"}},"id":"17987","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17991","type":"Line"},{"attributes":{"source":{"id":"17994"}},"id":"17998","type":"CDSView"},{"attributes":{"data_source":{"id":"18004"},"glyph":{"id":"18005"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18006"},"view":{"id":"18008"}},"id":"18007","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"18117"},"selection_policy":{"id":"18118"}},"id":"17989","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"18111"},"selection_policy":{"id":"18112"}},"id":"17974","type":"ColumnDataSource"}],"root_ids":["18163"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"7dccfd44-2dd7-4692-9da9-18069f50509e","root_ids":["18163"],"roots":{"18163":"5f490e07-eee7-4bf6-9642-6abfbc12b5d5"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();