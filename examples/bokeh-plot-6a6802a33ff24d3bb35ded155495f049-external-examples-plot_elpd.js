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
    
      
      
    
      var element = document.getElementById("9c5b00e7-53a9-4d83-a820-8527d838626f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9c5b00e7-53a9-4d83-a820-8527d838626f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ea40cba6-1191-4b98-a6f9-e5c553e65ce9":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"17320"},{"id":"17321"},{"id":"17322"},{"id":"17323"},{"id":"17324"},{"id":"17325"},{"id":"17326"},{"id":"17327"}]},"id":"17330","type":"Toolbar"},{"attributes":{},"id":"17355","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17329","type":"PolyAnnotation"},{"attributes":{},"id":"17351","type":"AllLabels"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17339","type":"Scatter"},{"attributes":{},"id":"17323","type":"WheelZoomTool"},{"attributes":{},"id":"17306","type":"DataRange1d"},{"attributes":{"below":[{"id":"17312"}],"center":[{"id":"17315"},{"id":"17319"}],"height":288,"left":[{"id":"17316"}],"output_backend":"webgl","renderers":[{"id":"17341"}],"title":{"id":"17343"},"toolbar":{"id":"17330"},"toolbar_location":null,"width":432,"x_range":{"id":"17304"},"x_scale":{"id":"17308"},"y_range":{"id":"17306"},"y_scale":{"id":"17310"}},"id":"17303","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"17327","type":"HoverTool"},{"attributes":{},"id":"17308","type":"LinearScale"},{"attributes":{"children":[{"id":"17359"},{"id":"17357"}]},"id":"17360","type":"Column"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17343","type":"Title"},{"attributes":{},"id":"17349","type":"BasicTickFormatter"},{"attributes":{},"id":"17313","type":"BasicTicker"},{"attributes":{},"id":"17354","type":"Selection"},{"attributes":{},"id":"17317","type":"BasicTicker"},{"attributes":{},"id":"17304","type":"DataRange1d"},{"attributes":{"formatter":{"id":"17346"},"major_label_policy":{"id":"17348"},"ticker":{"id":"17313"}},"id":"17312","type":"LinearAxis"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17349"},"major_label_policy":{"id":"17351"},"ticker":{"id":"17317"}},"id":"17316","type":"LinearAxis"},{"attributes":{"overlay":{"id":"17329"}},"id":"17324","type":"LassoSelectTool"},{"attributes":{"toolbars":[{"id":"17330"}],"tools":[{"id":"17320"},{"id":"17321"},{"id":"17322"},{"id":"17323"},{"id":"17324"},{"id":"17325"},{"id":"17326"},{"id":"17327"}]},"id":"17358","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"17328"}},"id":"17322","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"17312"},"ticker":null},"id":"17315","type":"Grid"},{"attributes":{},"id":"17348","type":"AllLabels"},{"attributes":{},"id":"17346","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"17303"},0,0]]},"id":"17357","type":"GridBox"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17354"},"selection_policy":{"id":"17355"}},"id":"17340","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17328","type":"BoxAnnotation"},{"attributes":{"toolbar":{"id":"17358"},"toolbar_location":"above"},"id":"17359","type":"ToolbarBox"},{"attributes":{"axis":{"id":"17316"},"dimension":1,"ticker":null},"id":"17319","type":"Grid"},{"attributes":{},"id":"17321","type":"PanTool"},{"attributes":{},"id":"17326","type":"SaveTool"},{"attributes":{"source":{"id":"17340"}},"id":"17342","type":"CDSView"},{"attributes":{},"id":"17325","type":"UndoTool"},{"attributes":{"data_source":{"id":"17340"},"glyph":{"id":"17339"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17342"}},"id":"17341","type":"GlyphRenderer"},{"attributes":{},"id":"17320","type":"ResetTool"},{"attributes":{},"id":"17310","type":"LinearScale"}],"root_ids":["17360"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"ea40cba6-1191-4b98-a6f9-e5c553e65ce9","root_ids":["17360"],"roots":{"17360":"9c5b00e7-53a9-4d83-a820-8527d838626f"}}];
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