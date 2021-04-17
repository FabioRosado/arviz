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
    
      
      
    
      var element = document.getElementById("3fad7145-ce0f-4356-8f4b-64f2fbd2bbf7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3fad7145-ce0f-4356-8f4b-64f2fbd2bbf7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4a487555-b442-47a6-87d1-38fee91a558e":{"defs":[],"roots":{"references":[{"attributes":{},"id":"35497","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35486","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"35541"},"glyph":{"id":"35540"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35543"}},"id":"35542","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35532"}},"id":"35536","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35537","type":"Span"},{"attributes":{},"id":"35575","type":"BasicTickFormatter"},{"attributes":{},"id":"35577","type":"AllLabels"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35538","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35571"},"selection_policy":{"id":"35572"}},"id":"35541","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35551","type":"Span"},{"attributes":{},"id":"35578","type":"BasicTickFormatter"},{"attributes":{},"id":"35580","type":"AllLabels"},{"attributes":{"text":"tau"},"id":"35544","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35548","type":"Circle"},{"attributes":{"callback":null},"id":"35484","type":"HoverTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35539","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35540","type":"Scatter"},{"attributes":{"source":{"id":"35541"}},"id":"35543","type":"CDSView"},{"attributes":{"source":{"id":"35546"}},"id":"35550","type":"CDSView"},{"attributes":{"axis":{"id":"35473"},"dimension":1,"ticker":null},"id":"35476","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35547","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35583"},"selection_policy":{"id":"35584"}},"id":"35546","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"35469"},"ticker":null},"id":"35472","type":"Grid"},{"attributes":{"data_source":{"id":"35555"},"glyph":{"id":"35554"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35557"}},"id":"35556","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"35590"},{"id":"35588"}]},"id":"35591","type":"Column"},{"attributes":{"below":[{"id":"35505"}],"center":[{"id":"35508"},{"id":"35512"}],"height":500,"left":[{"id":"35509"}],"output_backend":"webgl","renderers":[{"id":"35549"},{"id":"35551"},{"id":"35552"},{"id":"35553"},{"id":"35556"}],"title":{"id":"35558"},"toolbar":{"id":"35523"},"toolbar_location":null,"width":500,"x_range":{"id":"35497"},"x_scale":{"id":"35501"},"y_range":{"id":"35499"},"y_scale":{"id":"35503"}},"id":"35496","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35552","type":"Span"},{"attributes":{"overlay":{"id":"35486"}},"id":"35481","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"35546"},"glyph":{"id":"35547"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35548"},"view":{"id":"35550"}},"id":"35549","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35534","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35585"},"selection_policy":{"id":"35586"}},"id":"35555","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"35469"}],"center":[{"id":"35472"},{"id":"35476"}],"height":500,"left":[{"id":"35473"}],"output_backend":"webgl","renderers":[{"id":"35535"},{"id":"35537"},{"id":"35538"},{"id":"35539"},{"id":"35542"}],"title":{"id":"35544"},"toolbar":{"id":"35487"},"toolbar_location":null,"width":500,"x_range":{"id":"35461"},"x_scale":{"id":"35465"},"y_range":{"id":"35463"},"y_scale":{"id":"35467"}},"id":"35460","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35575"},"major_label_policy":{"id":"35577"},"ticker":{"id":"35506"}},"id":"35505","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"35499","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35578"},"major_label_policy":{"id":"35580"},"ticker":{"id":"35510"}},"id":"35509","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35569"},"selection_policy":{"id":"35570"}},"id":"35532","type":"ColumnDataSource"},{"attributes":{},"id":"35501","type":"LinearScale"},{"attributes":{"text":"mu"},"id":"35558","type":"Title"},{"attributes":{"toolbars":[{"id":"35487"},{"id":"35523"}],"tools":[{"id":"35477"},{"id":"35478"},{"id":"35479"},{"id":"35480"},{"id":"35481"},{"id":"35482"},{"id":"35483"},{"id":"35484"},{"id":"35513"},{"id":"35514"},{"id":"35515"},{"id":"35516"},{"id":"35517"},{"id":"35518"},{"id":"35519"},{"id":"35520"}]},"id":"35589","type":"ProxyToolbar"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35561"},"major_label_policy":{"id":"35563"},"ticker":{"id":"35470"}},"id":"35469","type":"LinearAxis"},{"attributes":{},"id":"35503","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35553","type":"Span"},{"attributes":{},"id":"35569","type":"Selection"},{"attributes":{},"id":"35506","type":"BasicTicker"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35554","type":"Scatter"},{"attributes":{},"id":"35570","type":"UnionRenderers"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35564"},"major_label_policy":{"id":"35566"},"ticker":{"id":"35474"}},"id":"35473","type":"LinearAxis"},{"attributes":{"axis":{"id":"35505"},"ticker":null},"id":"35508","type":"Grid"},{"attributes":{"source":{"id":"35555"}},"id":"35557","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35533","type":"Circle"},{"attributes":{"toolbar":{"id":"35589"},"toolbar_location":"above"},"id":"35590","type":"ToolbarBox"},{"attributes":{"axis":{"id":"35509"},"dimension":1,"ticker":null},"id":"35512","type":"Grid"},{"attributes":{},"id":"35482","type":"UndoTool"},{"attributes":{},"id":"35510","type":"BasicTicker"},{"attributes":{"overlay":{"id":"35521"}},"id":"35515","type":"BoxZoomTool"},{"attributes":{},"id":"35514","type":"PanTool"},{"attributes":{},"id":"35513","type":"ResetTool"},{"attributes":{},"id":"35516","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35522"}},"id":"35517","type":"LassoSelectTool"},{"attributes":{},"id":"35470","type":"BasicTicker"},{"attributes":{},"id":"35518","type":"UndoTool"},{"attributes":{},"id":"35465","type":"LinearScale"},{"attributes":{},"id":"35571","type":"Selection"},{"attributes":{},"id":"35572","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35521","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"35485"}},"id":"35479","type":"BoxZoomTool"},{"attributes":{},"id":"35467","type":"LinearScale"},{"attributes":{},"id":"35478","type":"PanTool"},{"attributes":{},"id":"35477","type":"ResetTool"},{"attributes":{},"id":"35483","type":"SaveTool"},{"attributes":{},"id":"35480","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"35460"},0,0],[{"id":"35496"},0,1]]},"id":"35588","type":"GridBox"},{"attributes":{},"id":"35474","type":"BasicTicker"},{"attributes":{},"id":"35583","type":"Selection"},{"attributes":{},"id":"35584","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"35477"},{"id":"35478"},{"id":"35479"},{"id":"35480"},{"id":"35481"},{"id":"35482"},{"id":"35483"},{"id":"35484"}]},"id":"35487","type":"Toolbar"},{"attributes":{},"id":"35561","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35522","type":"PolyAnnotation"},{"attributes":{},"id":"35563","type":"AllLabels"},{"attributes":{},"id":"35564","type":"BasicTickFormatter"},{"attributes":{},"id":"35519","type":"SaveTool"},{"attributes":{},"id":"35566","type":"AllLabels"},{"attributes":{"callback":null},"id":"35520","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"35513"},{"id":"35514"},{"id":"35515"},{"id":"35516"},{"id":"35517"},{"id":"35518"},{"id":"35519"},{"id":"35520"}]},"id":"35523","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35485","type":"BoxAnnotation"},{"attributes":{},"id":"35585","type":"Selection"},{"attributes":{},"id":"35586","type":"UnionRenderers"},{"attributes":{"end":1,"start":-0.05},"id":"35463","type":"DataRange1d"},{"attributes":{},"id":"35461","type":"DataRange1d"},{"attributes":{"data_source":{"id":"35532"},"glyph":{"id":"35533"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35534"},"view":{"id":"35536"}},"id":"35535","type":"GlyphRenderer"}],"root_ids":["35591"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"4a487555-b442-47a6-87d1-38fee91a558e","root_ids":["35591"],"roots":{"35591":"3fad7145-ce0f-4356-8f4b-64f2fbd2bbf7"}}];
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