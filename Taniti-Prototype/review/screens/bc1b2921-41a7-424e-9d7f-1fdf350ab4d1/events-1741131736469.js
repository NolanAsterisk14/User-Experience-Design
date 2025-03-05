jQuery("#simulation")
  .on("click", ".s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://facebook.com",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://facebook.com",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://x.com",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://instagram.com",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://instagram.com",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Circle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://instagram.com",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#000000",
                      "border-right-color": "#000000",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DDDDDD",
                      "border-right-color": "#DDDDDD",
                      "border-bottom-color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_11 span" ],
                    "attributes": {
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_12 span" ],
                    "attributes": {
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#000000",
                      "border-right-color": "#000000",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DDDDDD",
                      "border-right-color": "#DDDDDD",
                      "border-bottom-color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_11 span" ],
                    "attributes": {
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_12 span" ],
                    "attributes": {
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#000000",
                      "border-right-color": "#000000",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_12 span" ],
                    "attributes": {
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_11 span" ],
                    "attributes": {
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DDDDDD",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#000000",
                      "border-left-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_8 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#000000",
                      "border-right-color": "#000000",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_12 span" ],
                    "attributes": {
                      "font-family": "'Arial',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_11 span" ],
                    "attributes": {
                      "font-family": "'Arial',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  },{
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Cell_6 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#DDDDDD",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#000000",
                      "border-left-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/45ec266d-0a10-4857-b9c7-55e4c8e40568"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bc1b2921-41a7-424e-9d7f-1fdf350ab4d1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dc167ed4-34e1-431e-8bdb-c14a0521ed25"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ae121b77-8417-4678-9f4d-dda1abf63261"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_60") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_60" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_87") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_87" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_88") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Paragraph_88" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_20") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_20",
                  "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_21" ],
                    "attributes": {
                      "opacity": "0.4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_20",
                  "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_21" ],
                    "attributes": {
                      "opacity": "0.4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_41") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_41" ],
                    "attributes": {
                      "opacity": "0.4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_19",
                  "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Circle_5",
                  "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_17" ],
                    "attributes": {
                      "opacity": "0.4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_19") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_19",
                  "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Circle_5",
                  "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_17" ],
                    "attributes": {
                      "opacity": "0.4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Circle_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_19",
                  "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Circle_5",
                  "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Path_17" ],
                    "attributes": {
                      "opacity": "0.4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_16") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 #s-Text_1 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-bc1b2921-41a7-424e-9d7f-1fdf350ab4d1 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_60")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_87")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_88")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_20")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_21")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_41")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_17")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_19")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Circle_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_6")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_7")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_8")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_13")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_14")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_15")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_16")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_9")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_12")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });