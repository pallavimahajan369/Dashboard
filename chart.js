options = {
  annotations: {},
  chart: {
    animations: {
      enabled: false,
      easing: "swing"
    },
    background: "#fff",
    dropShadow: {
      top: -6,
      left: 0,
      blur: 7
    },
    foreColor: "#000000",
    fontFamily: "Archivo",
    height: 242,
    id: "jaru1",
    stacked: true,
    stackOnlyBar: true,
    toolbar: {
      show: false
    },
    type: "bar",
    width: 630,
    height:200,
    fontUrl: null
  },
  plotOptions: {
    bar: {
      columnWidth: "55%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
      hideZeroBarsWhenGrouped: false,
      isDumbbell: false,
      isFunnel: false,
      isFunnel3d: true,
      dataLabels: {
        position: "center",
        total: {
          enabled: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "#373d3f",
            fontSize: "12px",
            fontWeight: 600
          }
        }
      }
    },
    bubble: {
      zScaling: true
    },
    treemap: {
      dataLabels: {
        format: "scale"
      }
    },
    radialBar: {
      hollow: {
        background: "#fff"
      },
      dataLabels: {
        name: {},
        value: {},
        total: {}
      },
      barLabels: {
        enabled: false,
        margin: 5,
        useSeriesColors: true,
        fontWeight: 600,
        fontSize: "16px"
      }
    },
    pie: {
      donut: {
        labels: {
          name: {},
          value: {},
          total: {}
        }
      }
    }
  },
  colors: [
    "#0E1088",
    "#2C2FF2",
    "#89ADFB",
    "#fd6a6a",
    "#546E7A"
  ],
  dataLabels: {
    enabled: false,
    offsetX: -1,
    offsetY: -2,
    style: {
      fontWeight: 700,
      colors: [
        "#fff"
      ]
    },
    background: {
      enabled: false
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    strokeDashArray: 3,
    row: {},
    padding: {
      top: 10,
      right: 25,
      left: 15
    }
  },
  legend: {
    position: "top",
    fontWeight: 600,
    offsetX: -96,
    offsetY: 0,
    markers: {
      width: 15,
      height: 10,
      shape: "square",
      size: 8
    },
    itemMargin: {
      horizontal: 34,
      vertical: 0
    }
  },
  series: [
    {
      name: "Empolyer: K 73,500",
      data: [
        {
          x: "20",
          y: "20"
        },
        {
          x: "",
          y: "25"
        },
        {
          x: "25",
          y: "30"
        },
        {
          x: "",
          y: "35"
        },
        {
          x: "30",
          y: "40"
        },
        {
          x: "",
          y: "45"
        },
        {
          x: "35",
          y: "50"
        },
        {
          x: "",
          y: "55"
        },
        {
          x: "40",
          y: "60"
        },
        {
          x: "",
          y: "65"
        },
        {
          x: "60",
          y: "70"
        },
        {
          x: "",
          y: "80"
        },
        {
          x: "65",
          y: "95"
        }
      ],
      zIndex: 0
    },
    {
      name: "Employee: K 52,500",
      data: [
        {
          x: "20",
          y: "20"
        },
        {
          x: "",
          y: "30"
        },
        {
          x: "25",
          y: "35"
        },
        {
          x: "",
          y: "40"
        },
        {
          x: "30",
          y: "45"
        },
        {
          x: "",
          y: "50"
        },
        {
          x: "35",
          y: "50"
        },
        {
          x: "",
          y: "55"
        },
        {
          x: "40",
          y: "60"
        },
        {
          x: "",
          y: "65"
        },
        {
          x: "60",
          y: "75"
        },
        {
          x: "",
          y: "85"
        },
        {
          x: "65",
          y: "100"
        }
      ],
      zIndex: 1
    },
    {
      name: "Total Interest: K 244,313",
      data: [
        {
          x: "20",
          y: "25"
        },
        {
          x: "",
          y: "30"
        },
        {
          x: "25",
          y: "35"
        },
        {
          x: "",
          y: "40"
        },
        {
          x: "30",
          y: "50"
        },
        {
          x: "",
          y: "55"
        },
        {
          x: "35",
          y: "65"
        },
        {
          x: "",
          y: "80"
        },
        {
          x: "40",
          y: "90"
        },
        {
          x: "",
          y: "100"
        },
        {
          x: "60",
          y: "110"
        },
        {
          x: "",
          y: "120"
        },
        {
          x: "65",
          y: "130"
        }
      ],
      zIndex: 2
    }
  ],
  stroke: {
    fill: {
      type: "solid",
      opacity: 0.85,
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [
          0,
          50,
          100
        ],
        colorStops: []
      }
    }
  },
  tooltip: {
    shared: false,
    hideEmptySeries: true,
    intersect: true
  },
  xaxis: {
    type: "numeric",
    labels: {
      rotate: -27,
      trim: true,
      style: {
        fontWeight: 700
      }
    },
    group: {
      groups: [],
      style: {
        colors: [],
        fontSize: "12px",
        fontWeight: 400,
        cssClass: ""
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tickPlacement: "between",
    title: {
      style: {
        fontWeight: 700
      }
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 3,
    max: 300,
    min: 0,
    labels: {
      style: {
        colors: [
          null,
          null,
          null,
          null,
          null,
          null
        ],
        fontWeight: 600
      }
    },
    title: {
      style: {}
    }
  },
  theme: {
    palette: "palette3"
  },
  _chartInstances: [
    {
      id: "oFkGZ",
      chart: {
        opts: {
          annotations: {
            position: "front",
            yaxis: [],
            xaxis: [],
            points: []
          },
          chart: {
            type: "bar",
            background: "#fff",
            foreColor: "#000000",
            offsetX: 0,
            offsetY: 0,
            toolbar: {
              show: false
            },
            animations: {
              enabled: false
            },
            dropShadow: {
              enabled: false,
              top: 2,
              left: -11,
              blur: 7,
              color: "#000",
              opacity: 0.3
            },
            fontFamily: "Archivo",
            height: 277,
            width: 569,
            stacked: true,
            stackType: "normal",
            id: "oFkGZ",
            fontUrl: null
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "47%",
              barHeight: "70%",
              distributed: false,
              borderRadius: 0,
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "last",
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: "center"
              }
            },
            heatmap: {
              radius: 2,
              enableShades: true,
              shadeIntensity: 0.5
            },
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              hollow: {
                margin: 5,
                size: "50%",
                background: "#fff",
                position: "front",
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: "#000",
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 5,
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: "#000",
                  opacity: 0.5
                }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                  fontSize: 16,
                  offsetY: 0
                },
                value: {
                  show: true,
                  fontSize: 14,
                  offsetY: 16
                },
                total: {
                  show: false,
                  label: "Total",
                  fontSize: 16
                }
              }
            },
            pie: {
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              dataLabels: {
                offset: 0
              },
              donut: {
                size: "65%",
                labels: {
                  show: false,
                  name: {
                    show: true,
                    fontSize: 16,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: 20,
                    offsetY: 10
                  },
                  total: {
                    show: false,
                    showAlways: false,
                    label: "Total",
                    fontSize: 16
                  }
                }
              }
            },
            radar: {
              offsetX: 0,
              offsetY: 0,
              polygons: {
                strokeColors: "#e8e8e8",
                connectorColors: "#e8e8e8",
                fill: {}
              }
            }
          },
          colors: [
            "#13189E",
            "#5100FF",
            "#95B9FC",
            null,
            null,
            "#13189E",
            "#1D25F3",
            "#808DFC",
            null,
            null,
            "#13189E",
            "#1D25F3",
            "#808DFC",
            null,
            null,
            "#13189E",
            "#1D25F3",
            "#808DFC"
          ],
          theme: {
            mode: "light",
            palette: "palette3"
          },
          dataLabels: {
            enabled: false,
            textAnchor: "middle",
            offsetX: -1,
            offsetY: 0,
            style: {
              fontSize: 12,
              fontWeight: 700
            },
            background: {
              enabled: false,
              foreColor: "#fff",
              borderRadius: 2,
              padding: 4,
              opacity: 0.9,
              borderWidth: 1,
              borderColor: "#fff"
            },
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: "#000",
              opacity: 0.45
            }
          },
          markers: {
            size: 0,
            strokeColors: "#fff",
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            hover: {}
          },
          xaxis: {
            type: "numeric",
            offsetX: 0,
            offsetY: 1,
            position: "bottom",
            labels: {
              show: true,
              rotate: -27,
              rotateAlways: false,
              trim: true,
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 700,
                cssClass: ""
              },
              hideOverlappingLabels: true,
              maxHeight: 120,
              showDuplicates: true,
              datetimeUTC: true,
              datetimeFormatter: {
                year: "yyyy",
                month: "MMM 'yy",
                day: "dd MMM",
                hour: "HH:mm",
                minute: "HH:mm:ss",
                second: "HH:mm:ss"
              }
            },
            axisBorder: {
              show: false,
              color: "#e0e0e0",
              width: "100%",
              height: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: false,
              color: "#e0e0e0",
              height: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              style: {
                fontSize: 12,
                fontWeight: 700,
                cssClass: ""
              },
              offsetX: 0,
              offsetY: 0
            },
            crosshairs: {
              show: true,
              width: 1,
              position: "back",
              opacity: 0.9,
              stroke: {
                color: "#b6b6b6",
                width: 1,
                dashArray: 3
              },
              fill: {
                type: "solid",
                color: "#B1B9C4",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                  stops: [
                    0,
                    100
                  ]
                }
              },
              dropShadow: {
                enabled: false,
                left: 0,
                top: 0,
                blur: 1,
                opacity: 0.4
              }
            },
            convertedCatToNumeric: false,
            categories: [],
            tickPlacement: "between",
            floating: false,
            tooltip: {
              enabled: false,
              offsetY: 0,
              style: {
                fontSize: "12px"
              }
            },
            group: {
              style: {
                fontSize: "12px",
                fontWeight: 400,
                cssClass: ""
              }
            }
          },
          yaxis: [
            {
              show: true,
              showAlways: false,
              showForNullSeries: true,
              opposite: false,
              reversed: false,
              logarithmic: false,
              logBase: 10,
              tickAmount: 3,
              forceNiceScale: false,
              max: 300,
              min: 0,
              floating: false,
              labels: {
                show: true,
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                rotate: 0,
                padding: 20,
                style: {
                  fontSize: 11,
                  fontWeight: 600,
                  cssClass: ""
                }
              },
              axisBorder: {
                show: false,
                color: "#e0e0e0",
                width: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: false,
                color: "#e0e0e0",
                width: 6,
                offsetX: 0,
                offsetY: 0
              },
              title: {
                rotate: -90,
                offsetY: 0,
                offsetX: 0,
                style: {
                  fontSize: 11,
                  fontWeight: 900,
                  cssClass: ""
                }
              },
              tooltip: {
                enabled: false,
                offsetX: 0
              },
              crosshairs: {
                show: true,
                position: "front",
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                  dashArray: 0
                }
              }
            }
          ],
          grid: {
            show: true,
            borderColor: "#e0e0e0",
            strokeDashArray: 3,
            position: "back",
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
            row: {
              opacity: 0.5
            },
            column: {
              opacity: 0.5
            },
            padding: {
              top: 60,
              right: 25,
              bottom: 0,
              left: 15
            }
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            width: 2,
            dashArray: 0
          },
          fill: {
            type: "solid",
            opacity: 1,
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [
                0,
                50,
                100
              ],
              colorStops: []
            },
            pattern: {
              style: "squares",
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          legend: {
            show: true,
            showForSingleSeries: false,
            floating: false,
            position: "top",
            horizontalAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            offsetX: -68,
            offsetY: 38,
            labels: {
              useSeriesColors: false
            },
            markers: {
              width: 15,
              height: 10,
              strokeWidth: 0,
              strokeColor: "#fff",
              radius: 12
            },
            itemMargin: {
              horizontal: 25,
              vertical: 0
            },
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
              highlightDataSeries: true
            }
          }
        },
        w: {
          config: {
            annotations: {
              texts: [],
              images: [],
              shapes: [],
              position: "front"
            },
            chart: {
              animations: {
                enabled: false,
                easing: "swing",
                speed: 800,
                animateGradually: {
                  delay: 150,
                  enabled: true
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 350
                }
              },
              background: "#fff",
              locales: [
                {
                  name: "en",
                  options: {
                    months: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December"
                    ],
                    shortMonths: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec"
                    ],
                    days: [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    shortDays: [
                      "Sun",
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat"
                    ],
                    toolbar: {
                      exportToSVG: "Download SVG",
                      exportToPNG: "Download PNG",
                      exportToCSV: "Download CSV",
                      menu: "Menu",
                      selection: "Selection",
                      selectionZoom: "Selection Zoom",
                      zoomIn: "Zoom In",
                      zoomOut: "Zoom Out",
                      pan: "Panning",
                      reset: "Reset Zoom"
                    }
                  }
                }
              ],
              defaultLocale: "en",
              dropShadow: {
                enabled: false,
                top: 2,
                left: -11,
                blur: 7,
                color: "#000",
                opacity: 0.3
              },
              events: {},
              foreColor: "#000000",
              fontFamily: "Archivo",
              height: 277,
              parentHeightOffset: 15,
              redrawOnParentResize: true,
              redrawOnWindowResize: true,
              id: "oFkGZ",
              offsetX: 0,
              offsetY: 0,
              selection: {
                enabled: false,
                type: "x",
                fill: {
                  color: "#24292e",
                  opacity: 0.1
                },
                stroke: {
                  width: 1,
                  color: "#24292e",
                  opacity: 0.4,
                  dashArray: 3
                },
                xaxis: {},
                yaxis: {}
              },
              sparkline: {
                enabled: false
              },
              brush: {
                enabled: false,
                autoScaleYaxis: true
              },
              stacked: true,
              stackOnlyBar: true,
              stackType: "normal",
              toolbar: {
                show: false,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: false,
                  zoom: false,
                  zoomin: false,
                  zoomout: false,
                  pan: false,
                  reset: false,
                  customIcons: []
                },
                export: {
                  csv: {
                    columnDelimiter: ",",
                    headerCategory: "category",
                    headerValue: "value"
                  },
                  png: {},
                  svg: {}
                },
                autoSelected: "zoom"
              },
              type: "bar",
              width: 569,
              zoom: {
                enabled: true,
                type: "x",
                autoScaleYaxis: false,
                zoomedArea: {
                  fill: {
                    color: "#90CAF9",
                    opacity: 0.4
                  },
                  stroke: {
                    color: "#0D47A1",
                    opacity: 0.4,
                    width: 1
                  }
                }
              },
              fontUrl: null
            },
            plotOptions: {
              area: {
                fillTo: "origin"
              },
              bar: {
                horizontal: false,
                columnWidth: "47%",
                barHeight: "70%",
                distributed: false,
                borderRadius: 0,
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last",
                rangeBarOverlap: true,
                rangeBarGroupRows: false,
                hideZeroBarsWhenGrouped: false,
                isDumbbell: false,
                isFunnel: false,
                isFunnel3d: true,
                colors: {
                  backgroundBarOpacity: 1,
                  backgroundBarRadius: 0
                },
                dataLabels: {
                  position: "center",
                  maxItems: 100,
                  hideOverflowingLabels: true,
                  orientation: "horizontal",
                  total: {
                    enabled: false,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                      color: "#373d3f",
                      fontSize: "12px",
                      fontWeight: 600
                    }
                  }
                }
              },
              bubble: {
                zScaling: true
              },
              candlestick: {
                colors: {
                  upward: "#00B746",
                  downward: "#EF403C"
                },
                wick: {
                  useFillColor: true
                }
              },
              boxPlot: {
                colors: {
                  upper: "#00E396",
                  lower: "#008FFB"
                }
              },
              heatmap: {
                radius: 2,
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: false,
                distributed: false,
                useFillColorAsStroke: false,
                colorScale: {
                  inverse: false,
                  ranges: []
                }
              },
              treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                distributed: false,
                reverseNegativeShade: false,
                useFillColorAsStroke: false,
                dataLabels: {
                  format: "scale"
                },
                colorScale: {
                  inverse: false,
                  ranges: []
                }
              },
              radialBar: {
                inverseOrder: false,
                startAngle: 0,
                endAngle: 360,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                  margin: 5,
                  size: "50%",
                  background: "#fff",
                  imageWidth: 150,
                  imageHeight: 150,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  imageClipped: true,
                  position: "front",
                  dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.5
                  }
                },
                track: {
                  show: true,
                  background: "#f2f2f2",
                  strokeWidth: "97%",
                  opacity: 1,
                  margin: 5,
                  dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.5
                  }
                },
                dataLabels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: 16,
                    fontWeight: 600,
                    offsetY: 0
                  },
                  value: {
                    show: true,
                    fontSize: 14,
                    fontWeight: 400,
                    offsetY: 16
                  },
                  total: {
                    show: false,
                    label: "Total",
                    fontSize: 16,
                    fontWeight: 600
                  }
                },
                barLabels: {
                  enabled: false,
                  margin: 5,
                  useSeriesColors: true,
                  fontWeight: 600,
                  fontSize: "16px"
                }
              },
              pie: {
                customScale: 1,
                offsetX: 0,
                offsetY: 0,
                startAngle: 0,
                endAngle: 360,
                expandOnClick: true,
                dataLabels: {
                  offset: 0,
                  minAngleToShowLabel: 10
                },
                donut: {
                  size: "65%",
                  labels: {
                    show: false,
                    name: {
                      show: true,
                      fontSize: 16,
                      fontWeight: 600,
                      offsetY: -10
                    },
                    value: {
                      show: true,
                      fontSize: 20,
                      fontWeight: 400,
                      offsetY: 10
                    },
                    total: {
                      show: false,
                      showAlways: false,
                      label: "Total",
                      fontSize: 16,
                      fontWeight: 400
                    }
                  }
                }
              },
              polarArea: {
                rings: {
                  strokeWidth: 1,
                  strokeColor: "#e8e8e8"
                },
                spokes: {
                  strokeWidth: 1,
                  connectorColors: "#e8e8e8"
                }
              },
              radar: {
                offsetX: 0,
                offsetY: 0,
                polygons: {
                  strokeWidth: 1,
                  strokeColors: "#e8e8e8",
                  connectorColors: "#e8e8e8",
                  fill: {}
                }
              }
            },
            dataLabels: {
              enabled: false,
              textAnchor: "middle",
              distributed: false,
              offsetX: -1,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 700
              },
              background: {
                enabled: false,
                foreColor: "#fff",
                borderRadius: 2,
                padding: 4,
                opacity: 0.9,
                borderWidth: 1,
                borderColor: "#fff",
                dropShadow: {
                  enabled: false,
                  top: 1,
                  left: 1,
                  blur: 1,
                  color: "#000",
                  opacity: 0.45
                }
              },
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: "#000",
                opacity: 0.45
              }
            },
            fill: {
              type: "solid",
              opacity: 1,
              gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1
              },
              image: {
                src: []
              },
              pattern: {
                style: "squares",
                width: 6,
                height: 6,
                strokeWidth: 2
              }
            },
            forecastDataPoints: {
              count: 0,
              fillOpacity: 0.5,
              dashArray: 4
            },
            grid: {
              show: true,
              borderColor: "#e0e0e0",
              strokeDashArray: 3,
              position: "back",
              xaxis: {
                lines: {
                  show: false
                }
              },
              yaxis: {
                lines: {
                  show: true
                }
              },
              row: {
                opacity: 0.5
              },
              column: {
                opacity: 0.5
              },
              padding: {
                top: 60,
                right: 25,
                bottom: 0,
                left: 15
              }
            },
            labels: [],
            legend: {
              show: true,
              showForSingleSeries: false,
              showForNullSeries: true,
              showForZeroSeries: true,
              floating: false,
              position: "top",
              horizontalAlign: "center",
              inverseOrder: false,
              fontSize: 12,
              fontWeight: 600,
              offsetX: -68,
              offsetY: 38,
              customLegendItems: [],
              labels: {
                useSeriesColors: false
              },
              markers: {
                width: 15,
                height: 10,
                strokeWidth: 0,
                strokeColor: "#fff",
                radius: 12,
                offsetX: 0,
                offsetY: 0,
                shape: "square",
                size: 8
              },
              itemMargin: {
                horizontal: 25,
                vertical: 0
              },
              onItemClick: {
                toggleDataSeries: true
              },
              onItemHover: {
                highlightDataSeries: true
              }
            },
            markers: {
              discrete: [],
              size: 0,
              strokeColors: "#fff",
              strokeWidth: 2,
              strokeOpacity: 0.9,
              strokeDashArray: 0,
              fillOpacity: 1,
              shape: "circle",
              width: 8,
              height: 8,
              radius: 2,
              offsetX: 0,
              offsetY: 0,
              showNullDataPoints: true,
              hover: {
                sizeOffset: 3
              }
            },
            noData: {
              align: "center",
              verticalAlign: "middle",
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: "14px"
              }
            },
            responsive: [],
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "lighten",
                  value: 0.1
                }
              },
              active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                  type: "darken",
                  value: 0.5
                }
              }
            },
            title: {
              align: "left",
              margin: 5,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize: "14px",
                fontWeight: 900
              }
            },
            subtitle: {
              align: "left",
              margin: 5,
              offsetX: 0,
              offsetY: 30,
              floating: false,
              style: {
                fontSize: "12px",
                fontWeight: 400
              }
            },
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              width: 2,
              dashArray: 0,
              fill: {
                type: "solid",
                opacity: 0.85,
                gradient: {
                  shade: "dark",
                  type: "horizontal",
                  shadeIntensity: 0.5,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [
                    0,
                    50,
                    100
                  ],
                  colorStops: []
                }
              }
            },
            tooltip: {
              enabled: true,
              shared: false,
              hideEmptySeries: true,
              followCursor: false,
              intersect: true,
              inverseOrder: false,
              fillSeriesColor: false,
              theme: "light",
              cssClass: "",
              style: {
                fontSize: "12px"
              },
              onDatasetHover: {
                highlightDataSeries: false
              },
              x: {
                show: true,
                format: "dd MMM"
              },
              y: {
                title: {}
              },
              z: {
                title: "Size: "
              },
              marker: {
                show: true
              },
              items: {
                display: "flex"
              },
              fixed: {
                enabled: false,
                position: "topRight",
                offsetX: 0,
                offsetY: 0
              }
            },
            xaxis: {
              type: "numeric",
              convertedCatToNumeric: false,
              offsetX: 0,
              offsetY: 1,
              labels: {
                show: true,
                rotate: -27,
                rotateAlways: false,
                hideOverlappingLabels: true,
                trim: true,
                maxHeight: 120,
                showDuplicates: true,
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                  cssClass: ""
                },
                offsetX: 0,
                offsetY: 0,
                datetimeUTC: true,
                datetimeFormatter: {
                  year: "yyyy",
                  month: "MMM 'yy",
                  day: "dd MMM",
                  hour: "HH:mm",
                  minute: "HH:mm:ss",
                  second: "HH:mm:ss"
                }
              },
              group: {
                style: {
                  fontSize: "12px",
                  fontWeight: 400,
                  cssClass: ""
                }
              },
              axisBorder: {
                show: false,
                color: "#e0e0e0",
                width: "100%",
                height: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: false,
                color: "#e0e0e0",
                height: 6,
                offsetX: 0,
                offsetY: 0
              },
              tickPlacement: "between",
              floating: false,
              position: "bottom",
              title: {
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                  cssClass: ""
                }
              },
              crosshairs: {
                show: true,
                width: 1,
                position: "back",
                opacity: 0.9,
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                  dashArray: 3
                },
                fill: {
                  type: "solid",
                  color: "#B1B9C4",
                  gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    opacityFrom: 0.4,
                    opacityTo: 0.5
                  }
                },
                dropShadow: {
                  enabled: false,
                  left: 0,
                  top: 0,
                  blur: 1,
                  opacity: 0.4
                }
              },
              tooltip: {
                enabled: false,
                offsetY: 0,
                style: {
                  fontSize: "12px"
                }
              }
            },
            theme: {
              mode: "light",
              palette: "palette3",
              monochrome: {
                enabled: false,
                color: "#008FFB",
                shadeTo: "light",
                shadeIntensity: 0.65
              }
            }
          },
          globals: {
            chartID: "oFkGZ",
            cuid: "0w1n1o1ng",
            events: {
              beforeMount: [],
              mounted: [],
              updated: [],
              clicked: [],
              selection: [],
              dataPointSelection: [],
              zoomed: [],
              scrolled: []
            },
            clientX: 1195,
            clientY: 223,
            fill: {
              colors: [
                "#13189E",
                "#5100FF",
                "#95B9FC",
                null,
                null,
                "#13189E",
                "#1D25F3",
                "#808DFC",
                null,
                null,
                "#13189E",
                "#1D25F3",
                "#808DFC",
                null,
                null,
                "#13189E",
                "#1D25F3",
                "#808DFC"
              ]
            },
            stroke: {},
            dataLabels: {
              style: {
                colors: [
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff"
                ]
              }
            },
            radarPolygons: {
              fill: {
                colors: [
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none"
                ]
              }
            },
            markers: {
              size: [
                0,
                0,
                0,
                0
              ],
              largestSize: 0
            },
            animationEnded: true,
            isDirty: true,
            isExecCalled: false,
            initialConfig: {},
            initialSeries: [
              {
                name: "Empolyer: K 73,500",
                data: [
                  {
                    x: "20",
                    y: "20"
                  },
                  {
                    x: "",
                    y: "25"
                  },
                  {
                    x: "25",
                    y: "30"
                  },
                  {
                    x: "",
                    y: "35"
                  },
                  {
                    x: "30",
                    y: "40"
                  },
                  {
                    x: "",
                    y: "45"
                  },
                  {
                    x: "35",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "40",
                    y: "60"
                  },
                  {
                    x: "",
                    y: "65"
                  },
                  {
                    x: "60",
                    y: "70"
                  },
                  {
                    x: "",
                    y: "80"
                  },
                  {
                    x: "65",
                    y: "95"
                  }
                ],
                zIndex: 0
              },
              {
                name: "Employee: K 52,500",
                data: [
                  {
                    x: "20",
                    y: "20"
                  },
                  {
                    x: "",
                    y: "30"
                  },
                  {
                    x: "25",
                    y: "35"
                  },
                  {
                    x: "",
                    y: "40"
                  },
                  {
                    x: "30",
                    y: "45"
                  },
                  {
                    x: "",
                    y: "50"
                  },
                  {
                    x: "35",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "40",
                    y: "60"
                  },
                  {
                    x: "",
                    y: "65"
                  },
                  {
                    x: "60",
                    y: "75"
                  },
                  {
                    x: "",
                    y: "85"
                  },
                  {
                    x: "65",
                    y: "100"
                  }
                ],
                zIndex: 1
              },
              {
                name: "Total Interest: K 244,313",
                data: [
                  {
                    x: "20",
                    y: "25"
                  },
                  {
                    x: "",
                    y: "30"
                  },
                  {
                    x: "25",
                    y: "35"
                  },
                  {
                    x: "",
                    y: "40"
                  },
                  {
                    x: "30",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "35",
                    y: "65"
                  },
                  {
                    x: "",
                    y: "80"
                  },
                  {
                    x: "40",
                    y: "90"
                  },
                  {
                    x: "",
                    y: "100"
                  },
                  {
                    x: "60",
                    y: "110"
                  },
                  {
                    x: "",
                    y: "120"
                  },
                  {
                    x: "65",
                    y: "130"
                  }
                ],
                zIndex: 2
              }
            ],
            lastXAxis: {
              type: "numeric",
              categories: [],
              convertedCatToNumeric: false,
              offsetX: 0,
              offsetY: 1,
              labels: {
                show: true,
                rotate: -27,
                rotateAlways: false,
                hideOverlappingLabels: true,
                trim: true,
                maxHeight: 120,
                showDuplicates: true,
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                  cssClass: ""
                },
                offsetX: 0,
                offsetY: 0,
                datetimeUTC: true,
                datetimeFormatter: {
                  year: "yyyy",
                  month: "MMM 'yy",
                  day: "dd MMM",
                  hour: "HH:mm",
                  minute: "HH:mm:ss",
                  second: "HH:mm:ss"
                }
              },
              group: {
                groups: [],
                style: {
                  colors: [],
                  fontSize: "12px",
                  fontWeight: 400,
                  cssClass: ""
                }
              },
              axisBorder: {
                show: false,
                color: "#e0e0e0",
                width: "100%",
                height: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: false,
                color: "#e0e0e0",
                height: 6,
                offsetX: 0,
                offsetY: 0
              },
              tickPlacement: "between",
              floating: false,
              position: "bottom",
              title: {
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                  cssClass: ""
                }
              },
              crosshairs: {
                show: true,
                width: 1,
                position: "back",
                opacity: 0.9,
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                  dashArray: 3
                },
                fill: {
                  type: "solid",
                  color: "#B1B9C4",
                  gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [
                      0,
                      100
                    ],
                    opacityFrom: 0.4,
                    opacityTo: 0.5
                  }
                },
                dropShadow: {
                  enabled: false,
                  left: 0,
                  top: 0,
                  blur: 1,
                  opacity: 0.4
                }
              },
              tooltip: {
                enabled: false,
                offsetY: 0,
                style: {
                  fontSize: "12px"
                }
              }
            },
            lastYAxis: [
              {
                show: true,
                showAlways: false,
                showForNullSeries: true,
                opposite: false,
                reversed: false,
                logarithmic: false,
                logBase: 10,
                tickAmount: 3,
                forceNiceScale: false,
                max: 300,
                min: 0,
                floating: false,
                labels: {
                  show: true,
                  minWidth: 0,
                  maxWidth: 160,
                  offsetX: 0,
                  offsetY: 0,
                  rotate: 0,
                  padding: 20,
                  style: {
                    colors: [
                      null,
                      null,
                      null,
                      null,
                      null,
                      null
                    ],
                    fontSize: 11,
                    fontWeight: 600,
                    cssClass: ""
                  }
                },
                axisBorder: {
                  show: false,
                  color: "#e0e0e0",
                  width: 1,
                  offsetX: 0,
                  offsetY: 0
                },
                axisTicks: {
                  show: false,
                  color: "#e0e0e0",
                  width: 6,
                  offsetX: 0,
                  offsetY: 0
                },
                title: {
                  rotate: -90,
                  offsetY: 0,
                  offsetX: 0,
                  style: {
                    fontSize: 11,
                    fontWeight: 900,
                    cssClass: ""
                  }
                },
                tooltip: {
                  enabled: false,
                  offsetX: 0
                },
                crosshairs: {
                  show: true,
                  position: "front",
                  stroke: {
                    color: "#b6b6b6",
                    width: 1,
                    dashArray: 0
                  }
                }
              }
            ],
            columnSeries: null,
            labels: [
              "20",
              "",
              "25",
              "",
              "30",
              "",
              "35",
              "",
              "40",
              "",
              "60",
              "",
              "65"
            ],
            timescaleLabels: [],
            noLabelsProvided: false,
            allSeriesCollapsed: false,
            collapsedSeries: [],
            collapsedSeriesIndices: [],
            ancillaryCollapsedSeries: [],
            ancillaryCollapsedSeriesIndices: [],
            risingSeries: [],
            dataFormatXNumeric: false,
            capturedSeriesIndex: -1,
            capturedDataPointIndex: -1,
            selectedDataPoints: [],
            goldenPadding: 35,
            invalidLogScale: false,
            ignoreYAxisIndexes: [],
            yAxisSameScaleIndices: [],
            maxValsInArrayIndex: 0,
            radialSize: 74.90243902439025,
            zoomEnabled: true,
            panEnabled: false,
            selectionEnabled: false,
            yaxis: null,
            mousedown: false,
            lastClientPosition: {},
            yValueDecimal: 0,
            total: 0,
            SVGNS: "http://www.w3.org/2000/svg",
            svgWidth: 569,
            svgHeight: 277,
            noData: false,
            locale: {
              toolbar: {
                exportToSVG: "Download SVG",
                exportToPNG: "Download PNG",
                exportToCSV: "Download CSV",
                menu: "Menu",
                selection: "Selection",
                selectionZoom: "Selection Zoom",
                zoomIn: "Zoom In",
                zoomOut: "Zoom Out",
                pan: "Panning",
                reset: "Reset Zoom"
              }
            },
            dom: {
              baseEl: {
                _prevClass: "oFkGZ"
              },
              elWrap: {},
              Paper: {
                _stroke: "#000000",
                _event: null,
                dom: {},
                node: {},
                type: "svg",
                _defs: {
                  _stroke: "#000000",
                  _event: null,
                  dom: {},
                  node: {},
                  type: "defs"
                }
              },
              elLegendForeign: {
                instance: {
                  _stroke: "#000000",
                  _event: null,
                  dom: {},
                  type: "foreignObject"
                }
              },
              elLegendWrap: {},
              elGraphical: {
                _stroke: "#000000",
                _event: null,
                dom: {},
                node: {},
                type: "g"
              },
              elGridRectMask: {},
              elGridRectMarkerMask: {},
              elForecastMask: {},
              elNonForecastMask: {},
              elGridRect: {
                _stroke: "none",
                _event: null,
                dom: {},
                node: {},
                type: "rect"
              },
              elGridRectMarker: {
                _stroke: "none",
                _event: null,
                dom: {},
                node: {},
                type: "rect"
              }
            },
            memory: {
              methodsToExec: []
            },
            shouldAnimate: true,
            skipLastTimelinelabel: false,
            skipFirstTimelinelabel: false,
            delayedElements: [
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              }
            ],
            axisCharts: true,
            isDataXYZ: false,
            resized: true,
            resizeTimer: null,
            comboCharts: false,
            dataChanged: false,
            previousPaths: [],
            allSeriesHasEqualX: true,
            pointsArray: [],
            dataLabelsRects: [],
            lastDrawnDataLabelsIndexes: [],
            hasNullValues: false,
            zoomed: false,
            gridWidth: 514,
            gridHeight: 172,
            rotateXLabels: false,
            defaultLabels: false,
            yLabelFormatters: [
              null
            ],
            LINE_HEIGHT_RATIO: 1.618,
            xAxisLabelsHeight: 10,
            xAxisGroupLabelsHeight: 10,
            xAxisLabelsWidth: 0,
            yAxisLabelsWidth: 0,
            scaleX: 1,
            scaleY: 1,
            translateX: 30,
            translateY: 90,
            translateYAxisX: [
              -3
            ],
            yAxisWidths: [],
            translateXAxisY: -4,
            translateXAxisX: 0,
            tooltip: {
              tooltipUtil: {},
              tooltipLabels: {
                tooltipUtil: {}
              },
              tooltipPosition: {},
              marker: {
                tooltipPosition: {}
              },
              intersect: {
                isVerticalGroupedRangeBar: false
              },
              axesTooltip: {},
              showOnIntersect: true,
              showTooltipTitle: true,
              fixedTooltip: false,
              xaxisTooltip: null,
              yaxisTTEls: null,
              isBarShared: false,
              lastHoverTime: 1704907311899,
              xyRatios: {
                yRatio: [
                  1.744186046511628
                ],
                invertedYRatio: 0.5836575875486382,
                zRatio: null,
                xRatio: null,
                initialXRatio: null,
                invertedXRatio: null,
                baseLineInvertedY: 0.1,
                baseLineY: [
                  0
                ],
                baseLineX: 0
              },
              isXAxisTooltipEnabled: false,
              yaxisTooltips: [
                false
              ],
              allTooltipSeriesGroups: [],
              xaxisOffY: 173,
              yaxisOffX: 1,
              yaxisTooltip: {},
              yaxisTooltipText: [
                {}
              ],
              xcrosshairsWidth: 1,
              ycrosshairs: {
                instance: {
                  _stroke: "#b6b6b6",
                  _event: null,
                  dom: {},
                  type: "line"
                }
              },
              ycrosshairsHidden: {
                instance: {
                  _stroke: "#b6b6b6",
                  _event: null,
                  dom: {},
                  type: "line"
                }
              },
              xAxisTicksPositions: [
                39.53846153846154,
                79.07692307692308,
                118.61538461538461,
                158.15384615384616,
                197.6923076923077,
                237.23076923076925,
                276.7692307692308,
                316.3076923076923,
                355.84615384615387,
                395.3846153846154,
                434.92307692307696,
                474.4615384615385,
                514
              ],
              dataPointsDividedHeight: 13.23076923076923,
              dataPointsDividedWidth: 39.53846153846154,
              tooltipTitle: {},
              legendLabels: {
                0: {},
                1: {},
                2: {}
              },
              ttItems: [
                {},
                {},
                {}
              ],
              seriesBound: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            },
            series: [
              [
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60,
                65,
                70,
                80,
                95
              ],
              [
                20,
                30,
                35,
                40,
                45,
                50,
                50,
                55,
                60,
                65,
                75,
                85,
                100
              ],
              [
                25,
                30,
                35,
                40,
                50,
                55,
                65,
                80,
                90,
                100,
                110,
                120,
                130
              ]
            ],
            seriesCandleO: [],
            seriesCandleH: [],
            seriesCandleM: [],
            seriesCandleL: [],
            seriesCandleC: [],
            seriesRangeStart: [],
            seriesRangeEnd: [],
            seriesRange: [],
            seriesPercent: [
              [
                30.76923076923077,
                29.41176470588235,
                30,
                30.434782608695652,
                29.62962962962963,
                30,
                30.303030303030305,
                28.94736842105263,
                28.571428571428573,
                28.26086956521739,
                27.45098039215686,
                28.07017543859649,
                29.23076923076923
              ],
              [
                30.76923076923077,
                35.294117647058826,
                35,
                34.78260869565217,
                33.333333333333336,
                33.333333333333336,
                30.303030303030305,
                28.94736842105263,
                28.571428571428573,
                28.26086956521739,
                29.41176470588235,
                29.82456140350877,
                30.76923076923077
              ],
              [
                38.46153846153846,
                35.294117647058826,
                35,
                34.78260869565217,
                37.03703703703704,
                36.666666666666664,
                39.39393939393939,
                42.10526315789474,
                42.857142857142854,
                43.47826086956522,
                43.13725490196079,
                42.10526315789474,
                40
              ]
            ],
            seriesGoals: [
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ]
            ],
            seriesX: [
              null,
              [
                "20",
                "",
                "25",
                "",
                "30",
                "",
                "35",
                "",
                "40",
                "",
                "60",
                "",
                "65"
              ],
              [
                "20",
                "",
                "25",
                "",
                "30",
                "",
                "35",
                "",
                "40",
                "",
                "60",
                "",
                "65"
              ]
            ],
            seriesZ: [
              [],
              [],
              []
            ],
            seriesNames: [
              "Empolyer: K 73,500",
              "Employee: K 52,500",
              "Total Interest: K 244,313"
            ],
            seriesTotals: [
              670,
              710,
              930
            ],
            seriesLog: [
              null,
              null,
              null
            ],
            seriesColors: [
              null,
              null,
              null
            ],
            stackedSeriesTotals: [
              65,
              85,
              100,
              115,
              135,
              150,
              165,
              190,
              210,
              230,
              255,
              285,
              325
            ],
            seriesXvalues: [
              [
                50.01615384615385,
                89.55461538461539,
                129.09307692307692,
                168.63153846153847,
                208.17000000000002,
                247.70846153846156,
                287.2469230769231,
                326.78538461538466,
                366.3238461538462,
                405.86230769230775,
                445.4007692307693,
                484.93923076923085,
                524.4776923076923
              ],
              [
                50.01615384615385,
                89.55461538461539,
                129.09307692307692,
                168.63153846153847,
                208.17000000000002,
                247.70846153846156,
                287.2469230769231,
                326.78538461538466,
                366.3238461538462,
                405.86230769230775,
                445.4007692307693,
                484.93923076923085,
                524.4776923076923
              ],
              [
                50.01615384615385,
                89.55461538461539,
                129.09307692307692,
                168.63153846153847,
                208.17000000000002,
                247.70846153846156,
                287.2469230769231,
                326.78538461538466,
                366.3238461538462,
                405.86230769230775,
                445.4007692307693,
                484.93923076923085,
                524.4776923076923
              ]
            ],
            seriesYvalues: [
              [
                160.53333333333333,
                157.66666666666666,
                154.8,
                151.93333333333334,
                149.06666666666666,
                146.2,
                143.33333333333334,
                140.46666666666667,
                137.6,
                134.73333333333335,
                131.86666666666667,
                126.13333333333333,
                117.53333333333333
              ],
              [
                149.06766666666667,
                140.46766666666667,
                134.73433333333335,
                129.001,
                123.26766666666667,
                117.53433333333332,
                114.66766666666668,
                108.93433333333334,
                103.201,
                97.46766666666669,
                88.86766666666668,
                77.401,
                60.201
              ],
              [
                134.73533333333333,
                123.26866666666668,
                114.6686666666667,
                106.06866666666667,
                94.602,
                86.002,
                77.40200000000002,
                63.06866666666668,
                51.602,
                40.13533333333336,
                25.802000000000014,
                8.602000000000004,
                -14.331333333333333
              ]
            ],
            hasXaxisGroups: false,
            groups: [],
            seriesGroups: [],
            categoryLabels: [],
            selectionResizeTimer: null,
            isXNumeric: false,
            isMultiLineX: false,
            isMultipleYAxis: false,
            maxY: 300,
            minY: 0,
            minYArr: [
              0
            ],
            maxYArr: [
              300
            ],
            maxX: -1.7976931348623157e+308,
            minX: 1.7976931348623157e+308,
            initialMaxX: -1.7976931348623157e+308,
            initialMinX: 1.7976931348623157e+308,
            maxDate: 0,
            minDate: 1.7976931348623157e+308,
            minZ: 1.7976931348623157e+308,
            maxZ: -1.7976931348623157e+308,
            minXDiff: 1.7976931348623157e+308,
            yAxisScale: [
              {
                result: [
                  0,
                  100,
                  200,
                  300
                ],
                niceMin: 0,
                niceMax: 300
              }
            ],
            xAxisScale: null,
            xAxisTicksPositions: [],
            yLabelsCoords: [
              {
                width: 10,
                index: 0
              }
            ],
            yTitleCoords: [
              {
                width: 0,
                index: 0
              }
            ],
            barPadForNumericAxis: 0,
            padHorizontal: 0,
            xRange: null,
            yRange: [
              300
            ],
            zRange: null,
            dataPoints: 13,
            xTickAmount: 0,
            xyCharts: true,
            isBarHorizontal: false,
            chartClass: ".apexchartsoFkGZ",
            comboBarCount: 0,
            isRangeBar: false,
            stackedSeriesTotalsByGroups: [],
            xAxisHeight: 10,
            yLogRatio: [
              1.744186046511628
            ],
            logYRange: [
              null
            ],
            barWidth: 18.583076923076923
          }
        },
        publicMethods: [
          "updateOptions",
          "updateSeries",
          "appendData",
          "appendSeries",
          "isSeriesHidden",
          "toggleSeries",
          "showSeries",
          "hideSeries",
          "setLocale",
          "resetSeries",
          "zoomX",
          "toggleDataPointSelection",
          "dataURI",
          "exportToCSV",
          "addXaxisAnnotation",
          "addYaxisAnnotation",
          "addPointAnnotation",
          "clearAnnotations",
          "removeAnnotation",
          "paper",
          "destroy"
        ],
        eventList: [
          "click",
          "mousedown",
          "mousemove",
          "mouseleave",
          "touchstart",
          "touchmove",
          "touchleave",
          "mouseup",
          "touchend"
        ],
        animations: {},
        axes: {},
        core: {},
        config: {
          opts: {}
        },
        data: {
          coreUtils: {},
          fallbackToCategory: true,
          activeSeriesIndex: 0
        },
        grid: {
          xaxisLabels: [
            "20",
            "",
            "25",
            "",
            "30",
            "",
            "35",
            "",
            "40",
            "",
            "60",
            "",
            "65"
          ],
          axesUtils: {},
          isRangeBar: 0,
          elg: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elgridLinesH: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elgridLinesV: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elGridBorders: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          }
        },
        graphics: {},
        coreUtils: {},
        crosshairs: {},
        events: {},
        exports: {},
        localization: {},
        options: {
          yAxis: {
            show: true,
            showAlways: false,
            showForNullSeries: true,
            opposite: false,
            reversed: false,
            logarithmic: false,
            logBase: 10,
            forceNiceScale: false,
            floating: false,
            labels: {
              show: true,
              minWidth: 0,
              maxWidth: 160,
              offsetX: 0,
              offsetY: 0,
              rotate: 0,
              padding: 20,
              style: {
                colors: [],
                fontSize: "11px",
                fontWeight: 400,
                cssClass: ""
              }
            },
            axisBorder: {
              show: false,
              color: "#e0e0e0",
              width: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: false,
              color: "#e0e0e0",
              width: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              rotate: -90,
              offsetY: 0,
              offsetX: 0,
              style: {
                fontSize: "11px",
                fontWeight: 900,
                cssClass: ""
              }
            },
            tooltip: {
              enabled: false,
              offsetX: 0
            },
            crosshairs: {
              show: true,
              position: "front",
              stroke: {
                color: "#b6b6b6",
                width: 1,
                dashArray: 0
              }
            }
          },
          pointAnnotation: {
            x: 0,
            y: null,
            yAxisIndex: 0,
            marker: {
              size: 4,
              fillColor: "#fff",
              strokeWidth: 2,
              strokeColor: "#333",
              shape: "circle",
              offsetX: 0,
              offsetY: 0,
              radius: 2,
              cssClass: ""
            },
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "middle",
              offsetX: 0,
              offsetY: 0,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            },
            customSVG: {
              offsetX: 0,
              offsetY: 0
            },
            image: {
              width: 20,
              height: 20,
              offsetX: 0,
              offsetY: 0
            }
          },
          yAxisAnnotation: {
            y: 0,
            y2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            width: "100%",
            yAxisIndex: 0,
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "end",
              position: "right",
              offsetX: 0,
              offsetY: -3,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          xAxisAnnotation: {
            x: 0,
            x2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "middle",
              orientation: "vertical",
              position: "top",
              offsetX: 0,
              offsetY: 0,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          text: {
            x: 0,
            y: 0,
            text: "",
            textAnchor: "start",
            fontSize: "13px",
            fontWeight: 400,
            appendTo: ".apexcharts-annotations",
            backgroundColor: "transparent",
            borderColor: "#c2c2c2",
            borderRadius: 0,
            borderWidth: 0,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2
          }
        },
        responsive: {},
        series: {
          legendInactiveClass: "legend-mouseover-inactive"
        },
        theme: {
          colors: [],
          isColorFn: false,
          isHeatmapDistributed: false,
          isBarDistributed: false
        },
        formatters: {
          tooltipKeyFormat: "dd MMM"
        },
        titleSubtitle: {},
        legend: {
          isBarsDistributed: false,
          legendHelpers: {}
        },
        toolbar: {
          selectedClass: "apexcharts-selected",
          minX: 1.7976931348623157e+308,
          maxX: -1.7976931348623157e+308
        },
        tooltip: {
          tooltipUtil: {},
          tooltipLabels: {
            tooltipUtil: {}
          },
          tooltipPosition: {},
          marker: {
            tooltipPosition: {}
          },
          intersect: {
            isVerticalGroupedRangeBar: false
          },
          axesTooltip: {},
          showOnIntersect: true,
          showTooltipTitle: true,
          fixedTooltip: false,
          xaxisTooltip: null,
          yaxisTTEls: null,
          isBarShared: false,
          lastHoverTime: 1704907311899
        },
        dimensions: {
          lgRect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          yAxisWidth: 15,
          yAxisWidthLeft: 15,
          yAxisWidthRight: 0,
          xAxisHeight: 10,
          isSparkline: false,
          dimHelpers: {},
          dimYAxis: {},
          dimXAxis: {},
          dimGrid: {},
          lgWidthForSideLegends: 0,
          xPadRight: 0,
          xPadLeft: 0,
          xAxisWidth: 0
        },
        updateHelpers: {},
        zoomPanSelection: {
          selectedClass: "apexcharts-selected",
          minX: 1.7976931348623157e+308,
          maxX: -1.7976931348623157e+308,
          dragged: false,
          graphics: {},
          eventList: [
            "mousedown",
            "mouseleave",
            "mousemove",
            "touchstart",
            "touchmove",
            "mouseup",
            "touchend"
          ],
          clientX: 0,
          clientY: 0,
          startX: 0,
          endX: 0,
          dragX: 0,
          startY: 0,
          endY: 0,
          dragY: 0,
          moveDirection: "none"
        },
        pie: {
          chartType: "bar",
          initialAnim: false,
          dynamicAnim: false,
          animBeginArr: [
            0
          ],
          animDur: 0,
          defaultSize: 172,
          centerY: 86,
          centerX: 257,
          fullAngle: 360,
          initialAngle: 0,
          donutSize: 48.68658536585366,
          maxY: 0,
          sliceLabels: [],
          sliceSizes: [],
          prevSectorAngleArr: []
        },
        rangeBar: {
          isHorizontal: false,
          strokeWidth: 2,
          isNullValue: false,
          isRangeBar: 0,
          isVerticalGroupedRangeBar: 0,
          isFunnel: false,
          xRatio: null,
          initialXRatio: null,
          invertedXRatio: null,
          invertedYRatio: 0.5836575875486382,
          baseLineInvertedY: 0.1,
          yaxisIndex: 0,
          seriesLen: 0,
          pathArr: [],
          lastActiveBarSerieIndex: 2,
          stackedSeriesTotals: [
            65,
            85,
            100,
            115,
            135,
            150,
            165,
            190,
            210,
            230,
            255,
            285,
            325
          ],
          barHelpers: {}
        },
        annotations: {
          graphics: {},
          helpers: {},
          xAxisAnnotations: {
            helpers: {}
          },
          yAxisAnnotations: {
            helpers: {}
          },
          pointsAnnotations: {
            helpers: {}
          },
          xDivision: 39.53846153846154
        }
      }
    },
    {
      id: "gDkR5",
      chart: {
        opts: {
          annotations: {
            position: "front",
            yaxis: [],
            xaxis: [],
            points: []
          },
          chart: {
            type: "bar",
            background: "#fff",
            foreColor: "#000000",
            offsetX: 0,
            offsetY: 0,
            toolbar: {
              show: false
            },
            animations: {
              enabled: false
            },
            dropShadow: {
              enabled: false,
              top: 2,
              left: -11,
              blur: 7,
              color: "#000",
              opacity: 0.3
            },
            fontFamily: "Archivo",
            height: 277,
            width: 569,
            stacked: true,
            stackType: "normal",
            id: "gDkR5",
            fontUrl: null
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "47%",
              barHeight: "70%",
              distributed: false,
              borderRadius: 0,
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "last",
              colors: {
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: "center"
              }
            },
            heatmap: {
              radius: 2,
              enableShades: true,
              shadeIntensity: 0.5
            },
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              hollow: {
                margin: 5,
                size: "50%",
                background: "#fff",
                position: "front",
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: "#000",
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 5,
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: "#000",
                  opacity: 0.5
                }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                  fontSize: 16,
                  offsetY: 0
                },
                value: {
                  show: true,
                  fontSize: 14,
                  offsetY: 16
                },
                total: {
                  show: false,
                  label: "Total",
                  fontSize: 16
                }
              }
            },
            pie: {
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              dataLabels: {
                offset: 0
              },
              donut: {
                size: "65%",
                labels: {
                  show: false,
                  name: {
                    show: true,
                    fontSize: 16,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: 20,
                    offsetY: 10
                  },
                  total: {
                    show: false,
                    showAlways: false,
                    label: "Total",
                    fontSize: 16
                  }
                }
              }
            },
            radar: {
              offsetX: 0,
              offsetY: 0,
              polygons: {
                strokeColors: "#e8e8e8",
                connectorColors: "#e8e8e8",
                fill: {}
              }
            }
          },
          theme: {
            mode: "light",
            palette: "palette3"
          },
          dataLabels: {
            enabled: false,
            textAnchor: "middle",
            offsetX: -1,
            offsetY: 0,
            style: {
              fontSize: 12,
              fontWeight: 700
            },
            background: {
              enabled: false,
              foreColor: "#fff",
              borderRadius: 2,
              padding: 4,
              opacity: 0.9,
              borderWidth: 1,
              borderColor: "#fff"
            },
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: "#000",
              opacity: 0.45
            }
          },
          markers: {
            size: 0,
            strokeColors: "#fff",
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            hover: {}
          },
          xaxis: {
            type: "numeric",
            offsetX: 0,
            offsetY: 1,
            position: "bottom",
            labels: {
              show: true,
              rotate: -27,
              rotateAlways: false,
              trim: true,
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 700,
                cssClass: ""
              },
              hideOverlappingLabels: true,
              maxHeight: 120,
              showDuplicates: true,
              datetimeUTC: true
            },
            axisBorder: {
              show: false,
              color: "#e0e0e0",
              width: "100%",
              height: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: false,
              color: "#e0e0e0",
              height: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              style: {
                fontSize: 12,
                fontWeight: 700,
                cssClass: ""
              },
              offsetX: 0,
              offsetY: 0
            },
            crosshairs: {
              show: true,
              width: 1,
              position: "back",
              opacity: 0.9,
              stroke: {
                color: "#b6b6b6",
                width: 1,
                dashArray: 3
              },
              fill: {
                type: "solid",
                color: "#B1B9C4",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              },
              dropShadow: {
                enabled: false,
                left: 0,
                top: 0,
                blur: 1,
                opacity: 0.4
              }
            },
            convertedCatToNumeric: false,
            tickPlacement: "between",
            floating: false
          },
          yaxis: [
            {
              show: true,
              showAlways: false,
              showForNullSeries: true,
              opposite: false,
              reversed: false,
              logarithmic: false,
              logBase: 10,
              tickAmount: 3,
              forceNiceScale: false,
              max: 300,
              min: 0,
              floating: false,
              labels: {
                show: true,
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                rotate: 0,
                padding: 20,
                style: {
                  fontSize: 11,
                  fontWeight: 600,
                  cssClass: ""
                }
              },
              axisBorder: {
                show: false,
                color: "#e0e0e0",
                width: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: false,
                color: "#e0e0e0",
                width: 6,
                offsetX: 0,
                offsetY: 0
              },
              title: {
                rotate: -90,
                offsetY: 0,
                offsetX: 0,
                style: {
                  fontSize: 11,
                  fontWeight: 900,
                  cssClass: ""
                }
              },
              tooltip: {
                enabled: false,
                offsetX: 0
              },
              crosshairs: {
                show: true,
                position: "front",
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                  dashArray: 0
                }
              }
            }
          ],
          grid: {
            show: true,
            borderColor: "#e0e0e0",
            strokeDashArray: 3,
            position: "back",
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
            row: {
              opacity: 0.5
            },
            column: {
              opacity: 0.5
            },
            padding: {
              top: 60,
              right: 25,
              bottom: 0,
              left: 15
            }
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            width: 2,
            dashArray: 0
          },
          fill: {
            type: "solid",
            opacity: 1,
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1
            },
            pattern: {
              style: "squares",
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          legend: {
            show: true,
            showForSingleSeries: false,
            floating: false,
            position: "top",
            horizontalAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            offsetX: -68,
            offsetY: 38,
            labels: {
              useSeriesColors: false
            },
            markers: {
              width: 15,
              height: 10,
              strokeWidth: 0,
              strokeColor: "#fff",
              radius: 12
            },
            itemMargin: {
              horizontal: 25,
              vertical: 0
            },
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
              highlightDataSeries: true
            }
          }
        },
        w: {
          config: {
            annotations: {
              texts: [],
              images: [],
              shapes: [],
              position: "front"
            },
            chart: {
              animations: {
                enabled: false,
                easing: "swing",
                speed: 800,
                animateGradually: {
                  delay: 150,
                  enabled: true
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 350
                }
              },
              background: "#fff",
              locales: [
                null
              ],
              defaultLocale: "en",
              dropShadow: {
                enabled: false,
                top: 2,
                left: -11,
                blur: 7,
                color: "#000",
                opacity: 0.3
              },
              events: {},
              foreColor: "#000000",
              fontFamily: "Archivo",
              height: 277,
              parentHeightOffset: 15,
              redrawOnParentResize: true,
              redrawOnWindowResize: true,
              id: "gDkR5",
              offsetX: 0,
              offsetY: 0,
              selection: {
                enabled: false,
                type: "x",
                fill: {
                  color: "#24292e",
                  opacity: 0.1
                },
                stroke: {
                  width: 1,
                  color: "#24292e",
                  opacity: 0.4,
                  dashArray: 3
                },
                xaxis: {},
                yaxis: {}
              },
              sparkline: {
                enabled: false
              },
              brush: {
                enabled: false,
                autoScaleYaxis: true
              },
              stacked: true,
              stackOnlyBar: true,
              stackType: "normal",
              toolbar: {
                show: false,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: false,
                  zoom: false,
                  zoomin: false,
                  zoomout: false,
                  pan: false,
                  reset: false,
                  customIcons: []
                },
                export: {
                  csv: {
                    columnDelimiter: ",",
                    headerCategory: "category",
                    headerValue: "value"
                  },
                  png: {},
                  svg: {}
                },
                autoSelected: "zoom"
              },
              type: "bar",
              width: 569,
              zoom: {
                enabled: true,
                type: "x",
                autoScaleYaxis: false,
                zoomedArea: {
                  fill: {
                    color: "#90CAF9",
                    opacity: 0.4
                  },
                  stroke: {
                    color: "#0D47A1",
                    opacity: 0.4,
                    width: 1
                  }
                }
              },
              fontUrl: null
            },
            plotOptions: {
              area: {
                fillTo: "origin"
              },
              bar: {
                horizontal: false,
                columnWidth: "47%",
                barHeight: "70%",
                distributed: false,
                borderRadius: 0,
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last",
                rangeBarOverlap: true,
                rangeBarGroupRows: false,
                hideZeroBarsWhenGrouped: false,
                isDumbbell: false,
                isFunnel: false,
                isFunnel3d: true,
                colors: {
                  backgroundBarOpacity: 1,
                  backgroundBarRadius: 0
                },
                dataLabels: {
                  position: "center",
                  maxItems: 100,
                  hideOverflowingLabels: true,
                  orientation: "horizontal",
                  total: {
                    enabled: false,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                      color: "#373d3f",
                      fontSize: "12px",
                      fontWeight: 600
                    }
                  }
                }
              },
              bubble: {
                zScaling: true
              },
              candlestick: {
                colors: {
                  upward: "#00B746",
                  downward: "#EF403C"
                },
                wick: {
                  useFillColor: true
                }
              },
              boxPlot: {
                colors: {
                  upper: "#00E396",
                  lower: "#008FFB"
                }
              },
              heatmap: {
                radius: 2,
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: false,
                distributed: false,
                useFillColorAsStroke: false,
                colorScale: {
                  inverse: false,
                  ranges: []
                }
              },
              treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                distributed: false,
                reverseNegativeShade: false,
                useFillColorAsStroke: false,
                dataLabels: {
                  format: "scale"
                },
                colorScale: {
                  inverse: false,
                  ranges: []
                }
              },
              radialBar: {
                inverseOrder: false,
                startAngle: 0,
                endAngle: 360,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                  margin: 5,
                  size: "50%",
                  background: "#fff",
                  imageWidth: 150,
                  imageHeight: 150,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  imageClipped: true,
                  position: "front",
                  dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.5
                  }
                },
                track: {
                  show: true,
                  background: "#f2f2f2",
                  strokeWidth: "97%",
                  opacity: 1,
                  margin: 5,
                  dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.5
                  }
                },
                dataLabels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: 16,
                    fontWeight: 600,
                    offsetY: 0
                  },
                  value: {
                    show: true,
                    fontSize: 14,
                    fontWeight: 400,
                    offsetY: 16
                  },
                  total: {
                    show: false,
                    label: "Total",
                    fontSize: 16,
                    fontWeight: 600
                  }
                },
                barLabels: {
                  enabled: false,
                  margin: 5,
                  useSeriesColors: true,
                  fontWeight: 600,
                  fontSize: "16px"
                }
              },
              pie: {
                customScale: 1,
                offsetX: 0,
                offsetY: 0,
                startAngle: 0,
                endAngle: 360,
                expandOnClick: true,
                dataLabels: {
                  offset: 0,
                  minAngleToShowLabel: 10
                },
                donut: {
                  size: "65%",
                  labels: {
                    show: false,
                    name: {
                      show: true,
                      fontSize: 16,
                      fontWeight: 600,
                      offsetY: -10
                    },
                    value: {
                      show: true,
                      fontSize: 20,
                      fontWeight: 400,
                      offsetY: 10
                    },
                    total: {
                      show: false,
                      showAlways: false,
                      label: "Total",
                      fontSize: 16,
                      fontWeight: 400
                    }
                  }
                }
              },
              polarArea: {
                rings: {
                  strokeWidth: 1,
                  strokeColor: "#e8e8e8"
                },
                spokes: {
                  strokeWidth: 1,
                  connectorColors: "#e8e8e8"
                }
              },
              radar: {
                offsetX: 0,
                offsetY: 0,
                polygons: {
                  strokeWidth: 1,
                  strokeColors: "#e8e8e8",
                  connectorColors: "#e8e8e8",
                  fill: {}
                }
              }
            },
            dataLabels: {
              enabled: false,
              textAnchor: "middle",
              distributed: false,
              offsetX: -1,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 700
              },
              background: {
                enabled: false,
                foreColor: "#fff",
                borderRadius: 2,
                padding: 4,
                opacity: 0.9,
                borderWidth: 1,
                borderColor: "#fff",
                dropShadow: {
                  enabled: false,
                  top: 1,
                  left: 1,
                  blur: 1,
                  color: "#000",
                  opacity: 0.45
                }
              },
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: "#000",
                opacity: 0.45
              }
            },
            fill: {
              type: "solid",
              opacity: 1,
              gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1
              },
              image: {
                src: []
              },
              pattern: {
                style: "squares",
                width: 6,
                height: 6,
                strokeWidth: 2
              }
            },
            forecastDataPoints: {
              count: 0,
              fillOpacity: 0.5,
              dashArray: 4
            },
            grid: {
              show: true,
              borderColor: "#e0e0e0",
              strokeDashArray: 3,
              position: "back",
              xaxis: {
                lines: {
                  show: false
                }
              },
              yaxis: {
                lines: {
                  show: true
                }
              },
              row: {
                opacity: 0.5
              },
              column: {
                opacity: 0.5
              },
              padding: {
                top: 60,
                right: 25,
                bottom: 0,
                left: 15
              }
            },
            labels: [],
            legend: {
              show: true,
              showForSingleSeries: false,
              showForNullSeries: true,
              showForZeroSeries: true,
              floating: false,
              position: "top",
              horizontalAlign: "center",
              inverseOrder: false,
              fontSize: 12,
              fontWeight: 600,
              offsetX: -68,
              offsetY: 38,
              customLegendItems: [],
              labels: {
                useSeriesColors: false
              },
              markers: {
                width: 15,
                height: 10,
                strokeWidth: 0,
                strokeColor: "#fff",
                radius: 12,
                offsetX: 0,
                offsetY: 0,
                shape: "square",
                size: 8
              },
              itemMargin: {
                horizontal: 25,
                vertical: 0
              },
              onItemClick: {
                toggleDataSeries: true
              },
              onItemHover: {
                highlightDataSeries: true
              }
            },
            markers: {
              discrete: [],
              size: 0,
              strokeColors: "#fff",
              strokeWidth: 2,
              strokeOpacity: 0.9,
              strokeDashArray: 0,
              fillOpacity: 1,
              shape: "circle",
              width: 8,
              height: 8,
              radius: 2,
              offsetX: 0,
              offsetY: 0,
              showNullDataPoints: true,
              hover: {
                sizeOffset: 3
              }
            },
            noData: {
              align: "center",
              verticalAlign: "middle",
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: "14px"
              }
            },
            responsive: [],
            states: {
              normal: {
                filter: {
                  type: "none",
                  value: 0
                }
              },
              hover: {
                filter: {
                  type: "lighten",
                  value: 0.1
                }
              },
              active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                  type: "darken",
                  value: 0.5
                }
              }
            },
            title: {
              align: "left",
              margin: 5,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize: "14px",
                fontWeight: 900
              }
            },
            subtitle: {
              align: "left",
              margin: 5,
              offsetX: 0,
              offsetY: 30,
              floating: false,
              style: {
                fontSize: "12px",
                fontWeight: 400
              }
            },
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              width: 2,
              dashArray: 0,
              fill: {
                type: "solid",
                opacity: 0.85,
                gradient: {
                  shade: "dark",
                  type: "horizontal",
                  shadeIntensity: 0.5,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [
                    0,
                    50,
                    100
                  ],
                  colorStops: []
                }
              }
            },
            tooltip: {
              enabled: true,
              shared: false,
              hideEmptySeries: true,
              followCursor: false,
              intersect: true,
              inverseOrder: false,
              fillSeriesColor: false,
              theme: "light",
              cssClass: "",
              style: {
                fontSize: "12px"
              },
              onDatasetHover: {
                highlightDataSeries: false
              },
              x: {
                show: true,
                format: "dd MMM"
              },
              y: {
                title: {}
              },
              z: {
                title: "Size: "
              },
              marker: {
                show: true
              },
              items: {
                display: "flex"
              },
              fixed: {
                enabled: false,
                position: "topRight",
                offsetX: 0,
                offsetY: 0
              }
            },
            xaxis: {
              type: "numeric",
              convertedCatToNumeric: false,
              offsetX: 0,
              offsetY: 1,
              labels: {
                show: true,
                rotate: -27,
                rotateAlways: false,
                hideOverlappingLabels: true,
                trim: true,
                maxHeight: 120,
                showDuplicates: true,
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                  cssClass: ""
                },
                offsetX: 0,
                offsetY: 0,
                datetimeUTC: true,
                datetimeFormatter: {
                  year: "yyyy",
                  month: "MMM 'yy",
                  day: "dd MMM",
                  hour: "HH:mm",
                  minute: "HH:mm:ss",
                  second: "HH:mm:ss"
                }
              },
              group: {
                style: {
                  fontSize: "12px",
                  fontWeight: 400,
                  cssClass: ""
                }
              },
              axisBorder: {
                show: false,
                color: "#e0e0e0",
                width: "100%",
                height: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: false,
                color: "#e0e0e0",
                height: 6,
                offsetX: 0,
                offsetY: 0
              },
              tickPlacement: "between",
              floating: false,
              position: "bottom",
              title: {
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                  cssClass: ""
                }
              },
              crosshairs: {
                show: true,
                width: 1,
                position: "back",
                opacity: 0.9,
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                  dashArray: 3
                },
                fill: {
                  type: "solid",
                  color: "#B1B9C4",
                  gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    opacityFrom: 0.4,
                    opacityTo: 0.5
                  }
                },
                dropShadow: {
                  enabled: false,
                  left: 0,
                  top: 0,
                  blur: 1,
                  opacity: 0.4
                }
              },
              tooltip: {
                enabled: false,
                offsetY: 0,
                style: {
                  fontSize: "12px"
                }
              }
            },
            theme: {
              mode: "light",
              palette: "palette3",
              monochrome: {
                enabled: false,
                color: "#008FFB",
                shadeTo: "light",
                shadeIntensity: 0.65
              }
            }
          },
          globals: {
            chartID: "gDkR5",
            cuid: "o5j4zee2",
            events: {
              beforeMount: [],
              mounted: [],
              updated: [],
              clicked: [],
              selection: [],
              dataPointSelection: [],
              zoomed: [],
              scrolled: []
            },
            clientX: 1226,
            clientY: 488,
            fill: {
              colors: [
                "#13189E",
                "#5100FF",
                "#95B9FC",
                null,
                null,
                "#13189E",
                "#1D25F3",
                "#808DFC",
                null,
                null,
                "#13189E",
                "#1D25F3",
                "#808DFC",
                null,
                null,
                "#13189E",
                "#1D25F3",
                "#808DFC"
              ]
            },
            stroke: {},
            dataLabels: {
              style: {
                colors: [
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff"
                ]
              }
            },
            radarPolygons: {
              fill: {
                colors: [
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none"
                ]
              }
            },
            markers: {
              size: [
                0,
                0,
                0,
                0
              ],
              largestSize: 0
            },
            animationEnded: true,
            isDirty: true,
            isExecCalled: false,
            initialConfig: {},
            initialSeries: [
              {
                name: "Empolyer: K 73,500",
                data: [
                  {
                    x: "20",
                    y: "20"
                  },
                  {
                    x: "",
                    y: "25"
                  },
                  {
                    x: "25",
                    y: "30"
                  },
                  {
                    x: "",
                    y: "35"
                  },
                  {
                    x: "30",
                    y: "40"
                  },
                  {
                    x: "",
                    y: "45"
                  },
                  {
                    x: "35",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "40",
                    y: "60"
                  },
                  {
                    x: "",
                    y: "65"
                  },
                  {
                    x: "60",
                    y: "70"
                  },
                  {
                    x: "",
                    y: "80"
                  },
                  {
                    x: "65",
                    y: "95"
                  }
                ],
                zIndex: 0
              },
              {
                name: "Employee: K 52,500",
                data: [
                  {
                    x: "20",
                    y: "20"
                  },
                  {
                    x: "",
                    y: "30"
                  },
                  {
                    x: "25",
                    y: "35"
                  },
                  {
                    x: "",
                    y: "40"
                  },
                  {
                    x: "30",
                    y: "45"
                  },
                  {
                    x: "",
                    y: "50"
                  },
                  {
                    x: "35",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "40",
                    y: "60"
                  },
                  {
                    x: "",
                    y: "65"
                  },
                  {
                    x: "60",
                    y: "75"
                  },
                  {
                    x: "",
                    y: "85"
                  },
                  {
                    x: "65",
                    y: "100"
                  }
                ],
                zIndex: 1
              },
              {
                name: "Total Interest: K 244,313",
                data: [
                  {
                    x: "20",
                    y: "25"
                  },
                  {
                    x: "",
                    y: "30"
                  },
                  {
                    x: "25",
                    y: "35"
                  },
                  {
                    x: "",
                    y: "40"
                  },
                  {
                    x: "30",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "35",
                    y: "65"
                  },
                  {
                    x: "",
                    y: "80"
                  },
                  {
                    x: "40",
                    y: "90"
                  },
                  {
                    x: "",
                    y: "100"
                  },
                  {
                    x: "60",
                    y: "110"
                  },
                  {
                    x: "",
                    y: "120"
                  },
                  {
                    x: "65",
                    y: "130"
                  }
                ],
                zIndex: 2
              }
            ],
            lastXAxis: {
              type: "numeric",
              categories: [],
              convertedCatToNumeric: false,
              offsetX: 0,
              offsetY: 1,
              labels: {
                show: true,
                rotate: -27,
                rotateAlways: false,
                hideOverlappingLabels: true,
                trim: true,
                maxHeight: 120,
                showDuplicates: true,
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                  cssClass: ""
                },
                offsetX: 0,
                offsetY: 0,
                datetimeUTC: true,
                datetimeFormatter: {
                  year: "yyyy",
                  month: "MMM 'yy",
                  day: "dd MMM",
                  hour: "HH:mm",
                  minute: "HH:mm:ss",
                  second: "HH:mm:ss"
                }
              },
              group: {
                groups: [],
                style: {
                  colors: [],
                  fontSize: "12px",
                  fontWeight: 400,
                  cssClass: ""
                }
              },
              axisBorder: {
                show: false,
                color: "#e0e0e0",
                width: "100%",
                height: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: false,
                color: "#e0e0e0",
                height: 6,
                offsetX: 0,
                offsetY: 0
              },
              tickPlacement: "between",
              floating: false,
              position: "bottom",
              title: {
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: 12,
                  fontWeight: 700,
                  cssClass: ""
                }
              },
              crosshairs: {
                show: true,
                width: 1,
                position: "back",
                opacity: 0.9,
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                  dashArray: 3
                },
                fill: {
                  type: "solid",
                  color: "#B1B9C4",
                  gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [
                      0,
                      100
                    ],
                    opacityFrom: 0.4,
                    opacityTo: 0.5
                  }
                },
                dropShadow: {
                  enabled: false,
                  left: 0,
                  top: 0,
                  blur: 1,
                  opacity: 0.4
                }
              },
              tooltip: {
                enabled: false,
                offsetY: 0,
                style: {
                  fontSize: "12px"
                }
              }
            },
            lastYAxis: [
              {
                show: true,
                showAlways: false,
                showForNullSeries: true,
                opposite: false,
                reversed: false,
                logarithmic: false,
                logBase: 10,
                tickAmount: 3,
                forceNiceScale: false,
                max: 300,
                min: 0,
                floating: false,
                labels: {
                  show: true,
                  minWidth: 0,
                  maxWidth: 160,
                  offsetX: 0,
                  offsetY: 0,
                  rotate: 0,
                  padding: 20,
                  style: {
                    colors: [
                      null,
                      null,
                      null,
                      null,
                      null,
                      null
                    ],
                    fontSize: 11,
                    fontWeight: 600,
                    cssClass: ""
                  }
                },
                axisBorder: {
                  show: false,
                  color: "#e0e0e0",
                  width: 1,
                  offsetX: 0,
                  offsetY: 0
                },
                axisTicks: {
                  show: false,
                  color: "#e0e0e0",
                  width: 6,
                  offsetX: 0,
                  offsetY: 0
                },
                title: {
                  rotate: -90,
                  offsetY: 0,
                  offsetX: 0,
                  style: {
                    fontSize: 11,
                    fontWeight: 900,
                    cssClass: ""
                  }
                },
                tooltip: {
                  enabled: false,
                  offsetX: 0
                },
                crosshairs: {
                  show: true,
                  position: "front",
                  stroke: {
                    color: "#b6b6b6",
                    width: 1,
                    dashArray: 0
                  }
                }
              }
            ],
            columnSeries: null,
            labels: [
              "20",
              "",
              "25",
              "",
              "30",
              "",
              "35",
              "",
              "40",
              "",
              "60",
              "",
              "65"
            ],
            timescaleLabels: [],
            noLabelsProvided: false,
            allSeriesCollapsed: false,
            collapsedSeries: [],
            collapsedSeriesIndices: [],
            ancillaryCollapsedSeries: [],
            ancillaryCollapsedSeriesIndices: [],
            risingSeries: [],
            dataFormatXNumeric: false,
            capturedSeriesIndex: -1,
            capturedDataPointIndex: -1,
            selectedDataPoints: [],
            goldenPadding: 35,
            invalidLogScale: false,
            ignoreYAxisIndexes: [],
            yAxisSameScaleIndices: [],
            maxValsInArrayIndex: 0,
            radialSize: 74.90243902439025,
            zoomEnabled: true,
            panEnabled: false,
            selectionEnabled: false,
            yaxis: null,
            mousedown: false,
            lastClientPosition: {},
            yValueDecimal: 0,
            total: 0,
            SVGNS: "http://www.w3.org/2000/svg",
            svgWidth: 569,
            svgHeight: 277,
            noData: false,
            locale: {
              toolbar: {
                exportToSVG: "Download SVG",
                exportToPNG: "Download PNG",
                exportToCSV: "Download CSV",
                menu: "Menu",
                selection: "Selection",
                selectionZoom: "Selection Zoom",
                zoomIn: "Zoom In",
                zoomOut: "Zoom Out",
                pan: "Panning",
                reset: "Reset Zoom"
              }
            },
            dom: {
              baseEl: {
                _prevClass: "gDkR5"
              },
              elWrap: {},
              Paper: {
                _stroke: "#000000",
                _event: null,
                dom: {},
                node: {},
                type: "svg",
                _defs: {
                  _stroke: "#000000",
                  _event: null,
                  dom: {},
                  node: {},
                  type: "defs"
                }
              },
              elLegendForeign: {
                instance: {
                  _stroke: "#000000",
                  _event: null,
                  dom: {},
                  type: "foreignObject"
                }
              },
              elLegendWrap: {},
              elGraphical: {
                _stroke: "#000000",
                _event: null,
                dom: {},
                node: {},
                type: "g"
              },
              elGridRectMask: {},
              elGridRectMarkerMask: {},
              elForecastMask: {},
              elNonForecastMask: {},
              elGridRect: {
                _stroke: "none",
                _event: null,
                dom: {},
                node: {},
                type: "rect"
              },
              elGridRectMarker: {
                _stroke: "none",
                _event: null,
                dom: {},
                node: {},
                type: "rect"
              }
            },
            memory: {
              methodsToExec: []
            },
            shouldAnimate: true,
            skipLastTimelinelabel: false,
            skipFirstTimelinelabel: false,
            delayedElements: [
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              }
            ],
            axisCharts: true,
            isDataXYZ: false,
            resized: true,
            resizeTimer: null,
            comboCharts: false,
            dataChanged: false,
            previousPaths: [],
            allSeriesHasEqualX: true,
            pointsArray: [],
            dataLabelsRects: [],
            lastDrawnDataLabelsIndexes: [],
            hasNullValues: false,
            zoomed: false,
            gridWidth: 514,
            gridHeight: 172,
            rotateXLabels: false,
            defaultLabels: false,
            yLabelFormatters: [
              null
            ],
            LINE_HEIGHT_RATIO: 1.618,
            xAxisLabelsHeight: 10,
            xAxisGroupLabelsHeight: 10,
            xAxisLabelsWidth: 0,
            yAxisLabelsWidth: 0,
            scaleX: 1,
            scaleY: 1,
            translateX: 30,
            translateY: 90,
            translateYAxisX: [
              -3
            ],
            yAxisWidths: [],
            translateXAxisY: -4,
            translateXAxisX: 0,
            tooltip: {
              tooltipUtil: {},
              tooltipLabels: {
                tooltipUtil: {}
              },
              tooltipPosition: {},
              marker: {
                tooltipPosition: {}
              },
              intersect: {
                isVerticalGroupedRangeBar: false
              },
              axesTooltip: {},
              showOnIntersect: true,
              showTooltipTitle: true,
              fixedTooltip: false,
              xaxisTooltip: null,
              yaxisTTEls: null,
              isBarShared: false,
              lastHoverTime: 1704907311977,
              xyRatios: {
                yRatio: [
                  1.744186046511628
                ],
                invertedYRatio: 0.5836575875486382,
                zRatio: null,
                xRatio: null,
                initialXRatio: null,
                invertedXRatio: null,
                baseLineInvertedY: 0.1,
                baseLineY: [
                  0
                ],
                baseLineX: 0
              },
              isXAxisTooltipEnabled: false,
              yaxisTooltips: [
                false
              ],
              allTooltipSeriesGroups: [],
              xaxisOffY: 173,
              yaxisOffX: 1,
              yaxisTooltip: {},
              yaxisTooltipText: [
                {}
              ],
              xcrosshairsWidth: 1,
              ycrosshairs: {
                instance: {
                  _stroke: "#b6b6b6",
                  _event: null,
                  dom: {},
                  type: "line"
                }
              },
              ycrosshairsHidden: {
                instance: {
                  _stroke: "#b6b6b6",
                  _event: null,
                  dom: {},
                  type: "line"
                }
              },
              xAxisTicksPositions: [
                39.53846153846154,
                79.07692307692308,
                118.61538461538461,
                158.15384615384616,
                197.6923076923077,
                237.23076923076925,
                276.7692307692308,
                316.3076923076923,
                355.84615384615387,
                395.3846153846154,
                434.92307692307696,
                474.4615384615385,
                514
              ],
              dataPointsDividedHeight: 13.23076923076923,
              dataPointsDividedWidth: 39.53846153846154,
              tooltipTitle: {},
              legendLabels: {
                0: {},
                1: {},
                2: {}
              },
              ttItems: [
                {},
                {},
                {}
              ],
              seriesBound: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            },
            series: [
              [
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60,
                65,
                70,
                80,
                95
              ],
              [
                20,
                30,
                35,
                40,
                45,
                50,
                50,
                55,
                60,
                65,
                75,
                85,
                100
              ],
              [
                25,
                30,
                35,
                40,
                50,
                55,
                65,
                80,
                90,
                100,
                110,
                120,
                130
              ]
            ],
            seriesCandleO: [],
            seriesCandleH: [],
            seriesCandleM: [],
            seriesCandleL: [],
            seriesCandleC: [],
            seriesRangeStart: [],
            seriesRangeEnd: [],
            seriesRange: [],
            seriesPercent: [
              [
                30.76923076923077,
                29.41176470588235,
                30,
                30.434782608695652,
                29.62962962962963,
                30,
                30.303030303030305,
                28.94736842105263,
                28.571428571428573,
                28.26086956521739,
                27.45098039215686,
                28.07017543859649,
                29.23076923076923
              ],
              [
                30.76923076923077,
                35.294117647058826,
                35,
                34.78260869565217,
                33.333333333333336,
                33.333333333333336,
                30.303030303030305,
                28.94736842105263,
                28.571428571428573,
                28.26086956521739,
                29.41176470588235,
                29.82456140350877,
                30.76923076923077
              ],
              [
                38.46153846153846,
                35.294117647058826,
                35,
                34.78260869565217,
                37.03703703703704,
                36.666666666666664,
                39.39393939393939,
                42.10526315789474,
                42.857142857142854,
                43.47826086956522,
                43.13725490196079,
                42.10526315789474,
                40
              ]
            ],
            seriesGoals: [
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ]
            ],
            seriesX: [
              null,
              [
                "20",
                "",
                "25",
                "",
                "30",
                "",
                "35",
                "",
                "40",
                "",
                "60",
                "",
                "65"
              ],
              [
                "20",
                "",
                "25",
                "",
                "30",
                "",
                "35",
                "",
                "40",
                "",
                "60",
                "",
                "65"
              ]
            ],
            seriesZ: [
              [],
              [],
              []
            ],
            seriesNames: [
              "Empolyer: K 73,500",
              "Employee: K 52,500",
              "Total Interest: K 244,313"
            ],
            seriesTotals: [
              670,
              710,
              930
            ],
            seriesLog: [
              null,
              null,
              null
            ],
            seriesColors: [
              null,
              null,
              null
            ],
            stackedSeriesTotals: [
              65,
              85,
              100,
              115,
              135,
              150,
              165,
              190,
              210,
              230,
              255,
              285,
              325
            ],
            seriesXvalues: [
              [
                50.01615384615385,
                89.55461538461539,
                129.09307692307692,
                168.63153846153847,
                208.17000000000002,
                247.70846153846156,
                287.2469230769231,
                326.78538461538466,
                366.3238461538462,
                405.86230769230775,
                445.4007692307693,
                484.93923076923085,
                524.4776923076923
              ],
              [
                50.01615384615385,
                89.55461538461539,
                129.09307692307692,
                168.63153846153847,
                208.17000000000002,
                247.70846153846156,
                287.2469230769231,
                326.78538461538466,
                366.3238461538462,
                405.86230769230775,
                445.4007692307693,
                484.93923076923085,
                524.4776923076923
              ],
              [
                50.01615384615385,
                89.55461538461539,
                129.09307692307692,
                168.63153846153847,
                208.17000000000002,
                247.70846153846156,
                287.2469230769231,
                326.78538461538466,
                366.3238461538462,
                405.86230769230775,
                445.4007692307693,
                484.93923076923085,
                524.4776923076923
              ]
            ],
            seriesYvalues: [
              [
                160.53333333333333,
                157.66666666666666,
                154.8,
                151.93333333333334,
                149.06666666666666,
                146.2,
                143.33333333333334,
                140.46666666666667,
                137.6,
                134.73333333333335,
                131.86666666666667,
                126.13333333333333,
                117.53333333333333
              ],
              [
                149.06766666666667,
                140.46766666666667,
                134.73433333333335,
                129.001,
                123.26766666666667,
                117.53433333333332,
                114.66766666666668,
                108.93433333333334,
                103.201,
                97.46766666666669,
                88.86766666666668,
                77.401,
                60.201
              ],
              [
                134.73533333333333,
                123.26866666666668,
                114.6686666666667,
                106.06866666666667,
                94.602,
                86.002,
                77.40200000000002,
                63.06866666666668,
                51.602,
                40.13533333333336,
                25.802000000000014,
                8.602000000000004,
                -14.331333333333333
              ]
            ],
            hasXaxisGroups: false,
            groups: [],
            seriesGroups: [],
            categoryLabels: [],
            selectionResizeTimer: null,
            isXNumeric: false,
            isMultiLineX: false,
            isMultipleYAxis: false,
            maxY: 300,
            minY: 0,
            minYArr: [
              0
            ],
            maxYArr: [
              300
            ],
            maxX: -1.7976931348623157e+308,
            minX: 1.7976931348623157e+308,
            initialMaxX: -1.7976931348623157e+308,
            initialMinX: 1.7976931348623157e+308,
            maxDate: 0,
            minDate: 1.7976931348623157e+308,
            minZ: 1.7976931348623157e+308,
            maxZ: -1.7976931348623157e+308,
            minXDiff: 1.7976931348623157e+308,
            yAxisScale: [
              {
                result: [
                  0,
                  100,
                  200,
                  300
                ],
                niceMin: 0,
                niceMax: 300
              }
            ],
            xAxisScale: null,
            xAxisTicksPositions: [],
            yLabelsCoords: [
              {
                width: 10,
                index: 0
              }
            ],
            yTitleCoords: [
              {
                width: 0,
                index: 0
              }
            ],
            barPadForNumericAxis: 0,
            padHorizontal: 0,
            xRange: null,
            yRange: [
              300
            ],
            zRange: null,
            dataPoints: 13,
            xTickAmount: 0,
            xyCharts: true,
            isBarHorizontal: false,
            chartClass: ".apexchartsgDkR5",
            comboBarCount: 0,
            isRangeBar: false,
            stackedSeriesTotalsByGroups: [],
            xAxisHeight: 10,
            yLogRatio: [
              1.744186046511628
            ],
            logYRange: [
              null
            ],
            barWidth: 18.583076923076923
          }
        },
        publicMethods: [
          "updateOptions",
          "updateSeries",
          "appendData",
          "appendSeries",
          "isSeriesHidden",
          "toggleSeries",
          "showSeries",
          "hideSeries",
          "setLocale",
          "resetSeries",
          "zoomX",
          "toggleDataPointSelection",
          "dataURI",
          "exportToCSV",
          "addXaxisAnnotation",
          "addYaxisAnnotation",
          "addPointAnnotation",
          "clearAnnotations",
          "removeAnnotation",
          "paper",
          "destroy"
        ],
        eventList: [
          "click",
          "mousedown",
          "mousemove",
          "mouseleave",
          "touchstart",
          "touchmove",
          "touchleave",
          "mouseup",
          "touchend"
        ],
        animations: {},
        axes: {},
        core: {},
        config: {
          opts: {}
        },
        data: {
          coreUtils: {},
          fallbackToCategory: true,
          activeSeriesIndex: 0
        },
        grid: {
          xaxisLabels: [
            "20",
            "",
            "25",
            "",
            "30",
            "",
            "35",
            "",
            "40",
            "",
            "60",
            "",
            "65"
          ],
          axesUtils: {},
          isRangeBar: 0,
          elg: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elgridLinesH: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elgridLinesV: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elGridBorders: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          }
        },
        graphics: {},
        coreUtils: {},
        crosshairs: {},
        events: {},
        exports: {},
        localization: {},
        options: {
          yAxis: {
            show: true,
            showAlways: false,
            showForNullSeries: true,
            opposite: false,
            reversed: false,
            logarithmic: false,
            logBase: 10,
            forceNiceScale: false,
            floating: false,
            labels: {
              show: true,
              minWidth: 0,
              maxWidth: 160,
              offsetX: 0,
              offsetY: 0,
              rotate: 0,
              padding: 20,
              style: {
                colors: [],
                fontSize: "11px",
                fontWeight: 400,
                cssClass: ""
              }
            },
            axisBorder: {
              show: false,
              color: "#e0e0e0",
              width: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: false,
              color: "#e0e0e0",
              width: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              rotate: -90,
              offsetY: 0,
              offsetX: 0,
              style: {
                fontSize: "11px",
                fontWeight: 900,
                cssClass: ""
              }
            },
            tooltip: {
              enabled: false,
              offsetX: 0
            },
            crosshairs: {
              show: true,
              position: "front",
              stroke: {
                color: "#b6b6b6",
                width: 1,
                dashArray: 0
              }
            }
          },
          pointAnnotation: {
            x: 0,
            y: null,
            yAxisIndex: 0,
            marker: {
              size: 4,
              fillColor: "#fff",
              strokeWidth: 2,
              strokeColor: "#333",
              shape: "circle",
              offsetX: 0,
              offsetY: 0,
              radius: 2,
              cssClass: ""
            },
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "middle",
              offsetX: 0,
              offsetY: 0,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            },
            customSVG: {
              offsetX: 0,
              offsetY: 0
            },
            image: {
              width: 20,
              height: 20,
              offsetX: 0,
              offsetY: 0
            }
          },
          yAxisAnnotation: {
            y: 0,
            y2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            width: "100%",
            yAxisIndex: 0,
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "end",
              position: "right",
              offsetX: 0,
              offsetY: -3,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          xAxisAnnotation: {
            x: 0,
            x2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "middle",
              orientation: "vertical",
              position: "top",
              offsetX: 0,
              offsetY: 0,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          text: {
            x: 0,
            y: 0,
            text: "",
            textAnchor: "start",
            fontSize: "13px",
            fontWeight: 400,
            appendTo: ".apexcharts-annotations",
            backgroundColor: "transparent",
            borderColor: "#c2c2c2",
            borderRadius: 0,
            borderWidth: 0,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2
          }
        },
        responsive: {},
        series: {
          legendInactiveClass: "legend-mouseover-inactive"
        },
        theme: {
          colors: [],
          isColorFn: false,
          isHeatmapDistributed: false,
          isBarDistributed: false
        },
        formatters: {
          tooltipKeyFormat: "dd MMM"
        },
        titleSubtitle: {},
        legend: {
          isBarsDistributed: false,
          legendHelpers: {}
        },
        toolbar: {
          selectedClass: "apexcharts-selected",
          minX: 1.7976931348623157e+308,
          maxX: -1.7976931348623157e+308
        },
        tooltip: {
          tooltipUtil: {},
          tooltipLabels: {
            tooltipUtil: {}
          },
          tooltipPosition: {},
          marker: {
            tooltipPosition: {}
          },
          intersect: {
            isVerticalGroupedRangeBar: false
          },
          axesTooltip: {},
          showOnIntersect: true,
          showTooltipTitle: true,
          fixedTooltip: false,
          xaxisTooltip: null,
          yaxisTTEls: null,
          isBarShared: false,
          lastHoverTime: 1704907311977
        },
        dimensions: {
          lgRect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          yAxisWidth: 15,
          yAxisWidthLeft: 15,
          yAxisWidthRight: 0,
          xAxisHeight: 10,
          isSparkline: false,
          dimHelpers: {},
          dimYAxis: {},
          dimXAxis: {},
          dimGrid: {},
          lgWidthForSideLegends: 0,
          xPadRight: 0,
          xPadLeft: 0,
          xAxisWidth: 0
        },
        updateHelpers: {},
        zoomPanSelection: {
          selectedClass: "apexcharts-selected",
          minX: 1.7976931348623157e+308,
          maxX: -1.7976931348623157e+308,
          dragged: false,
          graphics: {},
          eventList: [
            "mousedown",
            "mouseleave",
            "mousemove",
            "touchstart",
            "touchmove",
            "mouseup",
            "touchend"
          ],
          clientX: 0,
          clientY: 0,
          startX: 0,
          endX: 0,
          dragX: 0,
          startY: 0,
          endY: 0,
          dragY: 0,
          moveDirection: "none"
        },
        pie: {
          chartType: "bar",
          initialAnim: false,
          dynamicAnim: false,
          animBeginArr: [
            0
          ],
          animDur: 0,
          defaultSize: 172,
          centerY: 86,
          centerX: 257,
          fullAngle: 360,
          initialAngle: 0,
          donutSize: 48.68658536585366,
          maxY: 0,
          sliceLabels: [],
          sliceSizes: [],
          prevSectorAngleArr: []
        },
        rangeBar: {
          isHorizontal: false,
          strokeWidth: 2,
          isNullValue: false,
          isRangeBar: 0,
          isVerticalGroupedRangeBar: 0,
          isFunnel: false,
          xRatio: null,
          initialXRatio: null,
          invertedXRatio: null,
          invertedYRatio: 0.5836575875486382,
          baseLineInvertedY: 0.1,
          yaxisIndex: 0,
          seriesLen: 0,
          pathArr: [],
          lastActiveBarSerieIndex: 2,
          stackedSeriesTotals: [
            65,
            85,
            100,
            115,
            135,
            150,
            165,
            190,
            210,
            230,
            255,
            285,
            325
          ],
          barHelpers: {}
        },
        annotations: {
          graphics: {},
          helpers: {},
          xAxisAnnotations: {
            helpers: {}
          },
          yAxisAnnotations: {
            helpers: {}
          },
          pointsAnnotations: {
            helpers: {}
          },
          xDivision: 39.53846153846154
        }
      }
    },
    {
      id: "jaru1",
      chart: {
        opts: {
          annotations: {
            position: "front",
            yaxis: [],
            xaxis: [],
            points: []
          },
          chart: {
            type: "bar",
            background: "#fff",
            foreColor: "#000000",
            offsetX: 0,
            offsetY: 0,
            toolbar: {
              show: false
            },
            animations: {
              enabled: false
            },
            dropShadow: {
              enabled: false,
              top: 2,
              left: -11,
              blur: 7,
              color: "#000",
              opacity: 0.3
            },
            fontFamily: "Archivo",
            height: 277,
            width: 569,
            stacked: true,
            stackType: "normal",
            id: "jaru1",
            fontUrl: null
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "47%",
              barHeight: "70%",
              distributed: false,
              borderRadius: 0,
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "last",
              colors: {
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: "center"
              }
            },
            heatmap: {
              radius: 2,
              enableShades: true,
              shadeIntensity: 0.5
            },
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              hollow: {
                margin: 5,
                size: "50%",
                background: "#fff",
                position: "front",
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: "#000",
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 5,
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: "#000",
                  opacity: 0.5
                }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                  fontSize: 16,
                  offsetY: 0
                },
                value: {
                  show: true,
                  fontSize: 14,
                  offsetY: 16
                },
                total: {
                  show: false,
                  label: "Total",
                  fontSize: 16
                }
              }
            },
            pie: {
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              dataLabels: {
                offset: 0
              },
              donut: {
                size: "65%",
                labels: {
                  show: false,
                  name: {
                    show: true,
                    fontSize: 16,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: 20,
                    offsetY: 10
                  },
                  total: {
                    show: false,
                    showAlways: false,
                    label: "Total",
                    fontSize: 16
                  }
                }
              }
            },
            radar: {
              offsetX: 0,
              offsetY: 0,
              polygons: {
                strokeColors: "#e8e8e8",
                connectorColors: "#e8e8e8",
                fill: {}
              }
            }
          },
          theme: {
            mode: "light",
            palette: "palette3"
          },
          dataLabels: {
            enabled: false,
            textAnchor: "middle",
            offsetX: -1,
            offsetY: 0,
            style: {
              fontSize: 12,
              fontWeight: 700
            },
            background: {
              enabled: false,
              foreColor: "#fff",
              borderRadius: 2,
              padding: 4,
              opacity: 0.9,
              borderWidth: 1,
              borderColor: "#fff"
            },
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: "#000",
              opacity: 0.45
            }
          },
          markers: {
            size: 0,
            strokeColors: "#fff",
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            hover: {}
          },
          xaxis: {
            type: "numeric",
            offsetX: 0,
            offsetY: 1,
            position: "bottom",
            labels: {
              show: true,
              rotate: -27,
              rotateAlways: false,
              trim: true,
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 700,
                cssClass: ""
              },
              hideOverlappingLabels: true,
              maxHeight: 120,
              showDuplicates: true,
              datetimeUTC: true
            },
            axisBorder: {
              show: false,
              color: "#e0e0e0",
              width: "100%",
              height: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: false,
              color: "#e0e0e0",
              height: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              style: {
                fontSize: 12,
                fontWeight: 700,
                cssClass: ""
              },
              offsetX: 0,
              offsetY: 0
            },
            crosshairs: {
              show: true,
              width: 1,
              position: "back",
              opacity: 0.9,
              stroke: {
                color: "#b6b6b6",
                width: 1,
                dashArray: 3
              },
              fill: {
                type: "solid",
                color: "#B1B9C4",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              },
              dropShadow: {
                enabled: false,
                left: 0,
                top: 0,
                blur: 1,
                opacity: 0.4
              }
            },
            convertedCatToNumeric: false,
            tickPlacement: "between",
            floating: false
          },
          yaxis: [
            {
              show: true,
              showAlways: false,
              showForNullSeries: true,
              opposite: false,
              reversed: false,
              logarithmic: false,
              logBase: 10,
              tickAmount: 3,
              forceNiceScale: false,
              max: 300,
              min: 0,
              floating: false,
              labels: {
                show: true,
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                rotate: 0,
                padding: 20,
                style: {
                  fontSize: 11,
                  fontWeight: 600,
                  cssClass: ""
                }
              },
              axisBorder: {
                show: false,
                color: "#e0e0e0",
                width: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: false,
                color: "#e0e0e0",
                width: 6,
                offsetX: 0,
                offsetY: 0
              },
              title: {
                rotate: -90,
                offsetY: 0,
                offsetX: 0,
                style: {
                  fontSize: 11,
                  fontWeight: 900,
                  cssClass: ""
                }
              },
              tooltip: {
                enabled: false,
                offsetX: 0
              },
              crosshairs: {
                show: true,
                position: "front",
                stroke: {
                  color: "#b6b6b6",
                  width: 1,
                  dashArray: 0
                }
              }
            }
          ],
          grid: {
            show: true,
            borderColor: "#e0e0e0",
            strokeDashArray: 3,
            position: "back",
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
            row: {
              opacity: 0.5
            },
            column: {
              opacity: 0.5
            },
            padding: {
              top: 60,
              right: 25,
              bottom: 0,
              left: 15
            }
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            width: 2,
            dashArray: 0
          },
          fill: {
            type: "solid",
            opacity: 1,
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1
            },
            pattern: {
              style: "squares",
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          legend: {
            show: true,
            showForSingleSeries: false,
            floating: false,
            position: "top",
            horizontalAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            offsetX: -68,
            offsetY: 38,
            labels: {
              useSeriesColors: false
            },
            markers: {
              width: 15,
              height: 10,
              strokeWidth: 0,
              strokeColor: "#fff",
              radius: 12
            },
            itemMargin: {
              horizontal: 25,
              vertical: 0
            },
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
              highlightDataSeries: true
            }
          }
        },
        w: {
          globals: {
            chartID: "jaru1",
            cuid: "wszdxkdg",
            events: {
              beforeMount: [],
              mounted: [],
              updated: [],
              clicked: [],
              selection: [],
              dataPointSelection: [],
              zoomed: [],
              scrolled: []
            },
            clientX: 1062,
            clientY: 236,
            fill: {
              colors: [
                "#0E1088",
                "#2C2FF2",
                "#89ADFB",
                "#fd6a6a",
                "#546E7A"
              ]
            },
            stroke: {},
            dataLabels: {
              style: {
                colors: [
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff"
                ]
              }
            },
            radarPolygons: {
              fill: {
                colors: [
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none"
                ]
              }
            },
            markers: {
              size: [
                0,
                0,
                0,
                0
              ],
              largestSize: 0
            },
            animationEnded: true,
            isDirty: true,
            isExecCalled: false,
            initialConfig: {
              forecastDataPoints: {
                count: 0,
                fillOpacity: 0.5,
                dashArray: 4
              },
              labels: [],
              markers: {
                discrete: [],
                size: 0,
                strokeColors: "#fff",
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                shape: "circle",
                width: 8,
                height: 8,
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                showNullDataPoints: true,
                hover: {
                  sizeOffset: 3
                }
              },
              noData: {
                align: "center",
                verticalAlign: "middle",
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: "14px"
                }
              },
              responsive: [],
              states: {
                normal: {
                  filter: {
                    type: "none",
                    value: 0
                  }
                },
                hover: {
                  filter: {
                    type: "lighten",
                    value: 0.1
                  }
                },
                active: {
                  allowMultipleDataPointsSelection: false,
                  filter: {
                    type: "darken",
                    value: 0.5
                  }
                }
              },
              title: {
                align: "left",
                margin: 5,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize: "14px",
                  fontWeight: 900
                }
              },
              subtitle: {
                align: "left",
                margin: 5,
                offsetX: 0,
                offsetY: 30,
                floating: false,
                style: {
                  fontSize: "12px",
                  fontWeight: 400
                }
              },
              yaxis: [
                null
              ]
            },
            initialSeries: [
              {
                name: "Empolyer: K 73,500",
                data: [
                  {
                    x: "20",
                    y: "20"
                  },
                  {
                    x: "",
                    y: "25"
                  },
                  {
                    x: "25",
                    y: "30"
                  },
                  {
                    x: "",
                    y: "35"
                  },
                  {
                    x: "30",
                    y: "40"
                  },
                  {
                    x: "",
                    y: "45"
                  },
                  {
                    x: "35",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "40",
                    y: "60"
                  },
                  {
                    x: "",
                    y: "65"
                  },
                  {
                    x: "60",
                    y: "70"
                  },
                  {
                    x: "",
                    y: "80"
                  },
                  {
                    x: "65",
                    y: "95"
                  }
                ],
                zIndex: 0
              },
              {
                name: "Employee: K 52,500",
                data: [
                  {
                    x: "20",
                    y: "20"
                  },
                  {
                    x: "",
                    y: "30"
                  },
                  {
                    x: "25",
                    y: "35"
                  },
                  {
                    x: "",
                    y: "40"
                  },
                  {
                    x: "30",
                    y: "45"
                  },
                  {
                    x: "",
                    y: "50"
                  },
                  {
                    x: "35",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "40",
                    y: "60"
                  },
                  {
                    x: "",
                    y: "65"
                  },
                  {
                    x: "60",
                    y: "75"
                  },
                  {
                    x: "",
                    y: "85"
                  },
                  {
                    x: "65",
                    y: "100"
                  }
                ],
                zIndex: 1
              },
              {
                name: "Total Interest: K 244,313",
                data: [
                  {
                    x: "20",
                    y: "25"
                  },
                  {
                    x: "",
                    y: "30"
                  },
                  {
                    x: "25",
                    y: "35"
                  },
                  {
                    x: "",
                    y: "40"
                  },
                  {
                    x: "30",
                    y: "50"
                  },
                  {
                    x: "",
                    y: "55"
                  },
                  {
                    x: "35",
                    y: "65"
                  },
                  {
                    x: "",
                    y: "80"
                  },
                  {
                    x: "40",
                    y: "90"
                  },
                  {
                    x: "",
                    y: "100"
                  },
                  {
                    x: "60",
                    y: "110"
                  },
                  {
                    x: "",
                    y: "120"
                  },
                  {
                    x: "65",
                    y: "130"
                  }
                ],
                zIndex: 2
              }
            ],
            lastXAxis: [],
            lastYAxis: [],
            columnSeries: null,
            labels: [
              "20",
              "",
              "25",
              "",
              "30",
              "",
              "35",
              "",
              "40",
              "",
              "60",
              "",
              "65"
            ],
            timescaleLabels: [],
            noLabelsProvided: false,
            allSeriesCollapsed: false,
            collapsedSeries: [],
            collapsedSeriesIndices: [],
            ancillaryCollapsedSeries: [],
            ancillaryCollapsedSeriesIndices: [],
            risingSeries: [],
            dataFormatXNumeric: false,
            capturedSeriesIndex: -1,
            capturedDataPointIndex: -1,
            selectedDataPoints: [],
            goldenPadding: 35,
            invalidLogScale: false,
            ignoreYAxisIndexes: [],
            yAxisSameScaleIndices: [],
            maxValsInArrayIndex: 0,
            radialSize: 64.34048780487807,
            zoomEnabled: true,
            panEnabled: false,
            selectionEnabled: false,
            yaxis: null,
            mousedown: false,
            lastClientPosition: {},
            yValueDecimal: 0,
            total: 0,
            SVGNS: "http://www.w3.org/2000/svg",
            svgWidth: 693,
            svgHeight: 242,
            noData: false,
            locale: {
              toolbar: {
                exportToSVG: "Download SVG",
                exportToPNG: "Download PNG",
                exportToCSV: "Download CSV",
                menu: "Menu",
                selection: "Selection",
                selectionZoom: "Selection Zoom",
                zoomIn: "Zoom In",
                zoomOut: "Zoom Out",
                pan: "Panning",
                reset: "Reset Zoom"
              }
            },
            dom: {
              baseEl: {
                _prevClass: "jaru1"
              },
              elWrap: {},
              Paper: {
                _stroke: "#000000",
                _event: null,
                dom: {},
                node: {},
                type: "svg",
                _defs: {
                  _stroke: "#000000",
                  _event: null,
                  dom: {},
                  node: {},
                  type: "defs"
                }
              },
              elLegendForeign: {
                instance: {
                  _stroke: "#000000",
                  _event: null,
                  dom: {},
                  type: "foreignObject"
                }
              },
              elLegendWrap: {},
              elGraphical: {
                _stroke: "#000000",
                _event: null,
                dom: {},
                node: {},
                type: "g"
              },
              elGridRectMask: {},
              elGridRectMarkerMask: {},
              elForecastMask: {},
              elNonForecastMask: {},
              elGridRect: {
                _stroke: "none",
                _event: null,
                dom: {},
                node: {},
                type: "rect"
              },
              elGridRectMarker: {
                _stroke: "none",
                _event: null,
                dom: {},
                node: {},
                type: "rect"
              }
            },
            memory: {
              methodsToExec: []
            },
            shouldAnimate: true,
            skipLastTimelinelabel: false,
            skipFirstTimelinelabel: false,
            delayedElements: [
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              },
              {
                el: {
                  instance: {
                    _stroke: "#000000",
                    _event: null,
                    dom: {},
                    type: "g"
                  }
                },
                index: 0
              }
            ],
            axisCharts: true,
            isDataXYZ: false,
            resized: true,
            resizeTimer: null,
            comboCharts: false,
            dataChanged: false,
            previousPaths: [
              {
                type: "bar",
                paths: [
                  {
                    d: "M 10.605877920297475 150.34900000000002 L 10.605877920297475 140.32580000000002 L 34.53135728102464 140.32580000000002 L 34.53135728102464 150.34900000000002 z"
                  },
                  {
                    d: "M 57.74311312161959 150.34900000000002 L 57.74311312161959 137.82000000000002 L 81.66859248234675 137.82000000000002 L 81.66859248234675 150.34900000000002 z"
                  },
                  {
                    d: "M 104.8803483229417 150.34900000000002 L 104.8803483229417 135.31420000000003 L 128.80582768366887 135.31420000000003 L 128.80582768366887 150.34900000000002 z"
                  },
                  {
                    d: "M 152.0175835242638 150.34900000000002 L 152.0175835242638 132.8084 L 175.94306288499098 132.8084 L 175.94306288499098 150.34900000000002 z"
                  },
                  {
                    d: "M 199.15481872558593 150.34900000000002 L 199.15481872558593 130.3026 L 223.0802980863131 130.3026 L 223.0802980863131 150.34900000000002 z"
                  },
                  {
                    d: "M 246.29205392690804 150.34900000000002 L 246.29205392690804 127.79680000000002 L 270.2175332876352 127.79680000000002 L 270.2175332876352 150.34900000000002 z"
                  },
                  {
                    d: "M 293.42928912823015 150.34900000000002 L 293.42928912823015 125.29100000000001 L 317.3547684889573 125.29100000000001 L 317.3547684889573 150.34900000000002 z"
                  },
                  {
                    d: "M 340.5665243295523 150.34900000000002 L 340.5665243295523 122.78520000000002 L 364.49200369027943 122.78520000000002 L 364.49200369027943 150.34900000000002 z"
                  },
                  {
                    d: "M 387.70375953087444 150.34900000000002 L 387.70375953087444 120.27940000000001 L 411.6292388916016 120.27940000000001 L 411.6292388916016 150.34900000000002 z"
                  },
                  {
                    d: "M 434.8409947321966 150.34900000000002 L 434.8409947321966 117.77360000000002 L 458.7664740929237 117.77360000000002 L 458.7664740929237 150.34900000000002 z"
                  },
                  {
                    d: "M 481.9782299335187 150.34900000000002 L 481.9782299335187 115.26780000000002 L 505.90370929424586 115.26780000000002 L 505.90370929424586 150.34900000000002 z"
                  },
                  {
                    d: "M 529.1154651348409 150.34900000000002 L 529.1154651348409 110.2562 L 553.040944495568 110.2562 L 553.040944495568 150.34900000000002 z"
                  },
                  {
                    d: "M 576.252700336163 150.34900000000002 L 576.252700336163 102.73880000000001 L 600.1781796968902 102.73880000000001 L 600.1781796968902 150.34900000000002 z"
                  }
                ],
                realIndex: "0"
              },
              {
                type: "bar",
                paths: [
                  {
                    d: "M 10.605877920297475 140.32680000000002 L 10.605877920297475 130.30360000000002 L 34.53135728102464 130.30360000000002 L 34.53135728102464 140.32680000000002 z"
                  },
                  {
                    d: "M 57.74311312161959 137.82100000000003 L 57.74311312161959 122.78620000000002 L 81.66859248234675 122.78620000000002 L 81.66859248234675 137.82100000000003 z"
                  },
                  {
                    d: "M 104.8803483229417 135.31520000000003 L 104.8803483229417 117.77460000000004 L 128.80582768366887 117.77460000000004 L 128.80582768366887 135.31520000000003 z"
                  },
                  {
                    d: "M 152.0175835242638 132.8094 L 152.0175835242638 112.763 L 175.94306288499098 112.763 L 175.94306288499098 132.8094 z"
                  },
                  {
                    d: "M 199.15481872558593 130.30360000000002 L 199.15481872558593 107.75140000000002 L 223.0802980863131 107.75140000000002 L 223.0802980863131 130.30360000000002 z"
                  },
                  {
                    d: "M 246.29205392690804 127.79780000000002 L 246.29205392690804 102.73980000000002 L 270.2175332876352 102.73980000000002 L 270.2175332876352 127.79780000000002 z"
                  },
                  {
                    d: "M 293.42928912823015 125.29200000000002 L 293.42928912823015 100.23400000000001 L 317.3547684889573 100.23400000000001 L 317.3547684889573 125.29200000000002 z"
                  },
                  {
                    d: "M 340.5665243295523 122.78620000000002 L 340.5665243295523 95.22240000000002 L 364.49200369027943 95.22240000000002 L 364.49200369027943 122.78620000000002 z"
                  },
                  {
                    d: "M 387.70375953087444 120.28040000000001 L 387.70375953087444 90.2108 L 411.6292388916016 90.2108 L 411.6292388916016 120.28040000000001 z"
                  },
                  {
                    d: "M 434.8409947321966 117.77460000000002 L 434.8409947321966 85.19920000000002 L 458.7664740929237 85.19920000000002 L 458.7664740929237 117.77460000000002 z"
                  },
                  {
                    d: "M 481.9782299335187 115.26880000000003 L 481.9782299335187 77.68180000000002 L 505.90370929424586 77.68180000000002 L 505.90370929424586 115.26880000000003 z"
                  },
                  {
                    d: "M 529.1154651348409 110.25720000000001 L 529.1154651348409 67.6586 L 553.040944495568 67.6586 L 553.040944495568 110.25720000000001 z"
                  },
                  {
                    d: "M 576.252700336163 102.73980000000002 L 576.252700336163 52.6238 L 600.1781796968902 52.6238 L 600.1781796968902 102.73980000000002 z"
                  }
                ],
                realIndex: "1"
              },
              {
                type: "bar",
                paths: [
                  {
                    d: "M 10.605877920297475 130.30460000000002 L 10.605877920297475 117.77560000000003 L 34.53135728102464 117.77560000000003 L 34.53135728102464 130.30460000000002 z"
                  },
                  {
                    d: "M 57.74311312161959 122.78720000000003 L 57.74311312161959 107.75240000000002 L 81.66859248234675 107.75240000000002 L 81.66859248234675 122.78720000000003 z"
                  },
                  {
                    d: "M 104.8803483229417 117.77560000000004 L 104.8803483229417 100.23500000000004 L 128.80582768366887 100.23500000000004 L 128.80582768366887 117.77560000000004 z"
                  },
                  {
                    d: "M 152.0175835242638 112.76400000000001 L 152.0175835242638 92.7176 L 175.94306288499098 92.7176 L 175.94306288499098 112.76400000000001 z"
                  },
                  {
                    d: "M 199.15481872558593 107.75240000000002 L 199.15481872558593 82.69440000000002 L 223.0802980863131 82.69440000000002 L 223.0802980863131 107.75240000000002 z"
                  },
                  {
                    d: "M 246.29205392690804 102.74080000000002 L 246.29205392690804 75.17700000000002 L 270.2175332876352 75.17700000000002 L 270.2175332876352 102.74080000000002 z"
                  },
                  {
                    d: "M 293.42928912823015 100.23500000000001 L 293.42928912823015 67.65960000000001 L 317.3547684889573 67.65960000000001 L 317.3547684889573 100.23500000000001 z"
                  },
                  {
                    d: "M 340.5665243295523 95.22340000000003 L 340.5665243295523 55.130600000000015 L 364.49200369027943 55.130600000000015 L 364.49200369027943 95.22340000000003 z"
                  },
                  {
                    d: "M 387.70375953087444 90.21180000000001 L 387.70375953087444 45.1074 L 411.6292388916016 45.1074 L 411.6292388916016 90.21180000000001 z"
                  },
                  {
                    d: "M 434.8409947321966 85.20020000000002 L 434.8409947321966 35.08420000000001 L 458.7664740929237 35.08420000000001 L 458.7664740929237 85.20020000000002 z"
                  },
                  {
                    d: "M 481.9782299335187 77.68280000000003 L 481.9782299335187 22.555200000000017 L 505.90370929424586 22.555200000000017 L 505.90370929424586 77.68280000000003 z"
                  },
                  {
                    d: "M 529.1154651348409 67.65960000000001 L 529.1154651348409 7.520399999999998 L 553.040944495568 7.520399999999998 L 553.040944495568 67.65960000000001 z"
                  },
                  {
                    d: "M 576.252700336163 52.6248 L 576.252700336163 -12.526000000000002 L 600.1781796968902 -12.526000000000002 L 600.1781796968902 52.6248 z"
                  }
                ],
                realIndex: "2"
              }
            ],
            allSeriesHasEqualX: true,
            pointsArray: [],
            dataLabelsRects: [],
            lastDrawnDataLabelsIndexes: [
              [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ]
            ],
            hasNullValues: false,
            zoomed: false,
            gridWidth: 612.7840576171875,
            gridHeight: 150.348,
            rotateXLabels: false,
            defaultLabels: false,
            yLabelFormatters: [
              null
            ],
            LINE_HEIGHT_RATIO: 1.618,
            xAxisLabelsHeight: 32.652,
            xAxisGroupLabelsHeight: 18.652,
            xAxisLabelsWidth: 13.875991821289062,
            yAxisLabelsWidth: 0,
            scaleX: 1,
            scaleY: 1,
            translateX: 55.2159423828125,
            translateY: 54,
            translateYAxisX: [
              22.2159423828125
            ],
            yAxisWidths: [],
            translateXAxisY: -4,
            translateXAxisX: 0,
            tooltip: {
              tooltipUtil: {},
              tooltipLabels: {
                tooltipUtil: {}
              },
              tooltipPosition: {},
              marker: {
                tooltipPosition: {}
              },
              intersect: {
                isVerticalGroupedRangeBar: false
              },
              axesTooltip: {},
              showOnIntersect: true,
              showTooltipTitle: true,
              fixedTooltip: false,
              xaxisTooltip: null,
              yaxisTTEls: null,
              isBarShared: false,
              lastHoverTime: 1704914409057,
              xyRatios: {
                yRatio: [
                  1.9953707398834701
                ],
                invertedYRatio: 0.48956887221666767,
                zRatio: null,
                xRatio: null,
                initialXRatio: null,
                invertedXRatio: null,
                baseLineInvertedY: 0.1,
                baseLineY: [
                  0
                ],
                baseLineX: 0
              },
              isXAxisTooltipEnabled: false,
              yaxisTooltips: [
                false
              ],
              allTooltipSeriesGroups: [],
              xaxisOffY: 151.348,
              yaxisOffX: 1,
              yaxisTooltip: {},
              yaxisTooltipText: [
                {}
              ],
              xcrosshairsWidth: 1,
              ycrosshairs: {
                instance: {
                  _stroke: "#b6b6b6",
                  _event: null,
                  dom: {},
                  type: "line"
                }
              },
              ycrosshairsHidden: {
                instance: {
                  _stroke: "#b6b6b6",
                  _event: null,
                  dom: {},
                  type: "line"
                }
              },
              xAxisTicksPositions: [
                47.13723520132211,
                94.27447040264423,
                141.41170560396634,
                188.54894080528845,
                235.68617600661057,
                282.8234112079327,
                329.96064640925476,
                377.0978816105769,
                424.23511681189905,
                471.3723520132212,
                518.5095872145433,
                565.6468224158655,
                612.7840576171876
              ],
              dataPointsDividedHeight: 11.56523076923077,
              dataPointsDividedWidth: 47.13723520132211,
              tooltipTitle: {},
              legendLabels: {
                0: {},
                1: {},
                2: {}
              },
              ttItems: [
                {},
                {},
                {}
              ],
              seriesBound: {
                x: 899.2159423828125,
                y: 231,
                width: 612.7840576171875,
                height: 149.3480224609375,
                top: 231,
                right: 1512,
                bottom: 380.3480224609375,
                left: 899.2159423828125
              }
            },
            series: [
              [
                20,
                25,
                30,
                35,
                40,
                45,
                50,
                55,
                60,
                65,
                70,
                80,
                95
              ],
              [
                20,
                30,
                35,
                40,
                45,
                50,
                50,
                55,
                60,
                65,
                75,
                85,
                100
              ],
              [
                25,
                30,
                35,
                40,
                50,
                55,
                65,
                80,
                90,
                100,
                110,
                120,
                130
              ]
            ],
            seriesCandleO: [],
            seriesCandleH: [],
            seriesCandleM: [],
            seriesCandleL: [],
            seriesCandleC: [],
            seriesRangeStart: [],
            seriesRangeEnd: [],
            seriesRange: [],
            seriesPercent: [
              [
                30.76923076923077,
                29.41176470588235,
                30,
                30.434782608695652,
                29.62962962962963,
                30,
                30.303030303030305,
                28.94736842105263,
                28.571428571428573,
                28.26086956521739,
                27.45098039215686,
                28.07017543859649,
                29.23076923076923
              ],
              [
                30.76923076923077,
                35.294117647058826,
                35,
                34.78260869565217,
                33.333333333333336,
                33.333333333333336,
                30.303030303030305,
                28.94736842105263,
                28.571428571428573,
                28.26086956521739,
                29.41176470588235,
                29.82456140350877,
                30.76923076923077
              ],
              [
                38.46153846153846,
                35.294117647058826,
                35,
                34.78260869565217,
                37.03703703703704,
                36.666666666666664,
                39.39393939393939,
                42.10526315789474,
                42.857142857142854,
                43.47826086956522,
                43.13725490196079,
                42.10526315789474,
                40
              ]
            ],
            seriesGoals: [
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ],
              [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ]
            ],
            seriesX: [
              null,
              [
                "20",
                "",
                "25",
                "",
                "30",
                "",
                "35",
                "",
                "40",
                "",
                "60",
                "",
                "65"
              ],
              [
                "20",
                "",
                "25",
                "",
                "30",
                "",
                "35",
                "",
                "40",
                "",
                "60",
                "",
                "65"
              ]
            ],
            seriesZ: [
              [],
              [],
              []
            ],
            seriesNames: [
              "Empolyer: K 73,500",
              "Employee: K 52,500",
              "Total Interest: K 244,313"
            ],
            seriesTotals: [
              670,
              710,
              930
            ],
            seriesLog: [
              null,
              null,
              null
            ],
            seriesColors: [
              null,
              null,
              null
            ],
            stackedSeriesTotals: [
              65,
              85,
              100,
              115,
              135,
              150,
              165,
              190,
              210,
              230,
              255,
              285,
              325
            ],
            seriesXvalues: [
              [
                57.74311312161959,
                104.8803483229417,
                152.0175835242638,
                199.15481872558593,
                246.29205392690804,
                293.42928912823015,
                340.5665243295523,
                387.70375953087444,
                434.8409947321966,
                481.9782299335187,
                529.1154651348409,
                576.252700336163,
                623.3899355374851
              ],
              [
                57.74311312161959,
                104.8803483229417,
                152.0175835242638,
                199.15481872558593,
                246.29205392690804,
                293.42928912823015,
                340.5665243295523,
                387.70375953087444,
                434.8409947321966,
                481.9782299335187,
                529.1154651348409,
                576.252700336163,
                623.3899355374851
              ],
              [
                57.74311312161959,
                104.8803483229417,
                152.0175835242638,
                199.15481872558593,
                246.29205392690804,
                293.42928912823015,
                340.5665243295523,
                387.70375953087444,
                434.8409947321966,
                481.9782299335187,
                529.1154651348409,
                576.252700336163,
                623.3899355374851
              ]
            ],
            seriesYvalues: [
              [
                140.3248,
                137.81900000000002,
                135.31320000000002,
                132.8074,
                130.3016,
                127.79580000000001,
                125.29,
                122.78420000000001,
                120.2784,
                117.77260000000001,
                115.26680000000002,
                110.2552,
                102.73780000000001
              ],
              [
                130.3026,
                122.78520000000002,
                117.77360000000003,
                112.762,
                107.75040000000001,
                102.73880000000001,
                100.233,
                95.22140000000002,
                90.2098,
                85.19820000000001,
                77.68080000000002,
                67.6576,
                52.622800000000005
              ],
              [
                117.77460000000002,
                107.75140000000002,
                100.23400000000004,
                92.7166,
                82.69340000000001,
                75.17600000000002,
                67.6586,
                55.12960000000002,
                45.1064,
                35.08320000000001,
                22.554200000000016,
                7.519399999999997,
                -12.527000000000001
              ]
            ],
            hasXaxisGroups: false,
            groups: [],
            seriesGroups: [],
            categoryLabels: [],
            selectionResizeTimer: null,
            isXNumeric: false,
            isMultiLineX: false,
            isMultipleYAxis: false,
            maxY: 300,
            minY: 0,
            minYArr: [
              0
            ],
            maxYArr: [
              300
            ],
            maxX: -1.7976931348623157e+308,
            minX: 1.7976931348623157e+308,
            initialMaxX: -1.7976931348623157e+308,
            initialMinX: 1.7976931348623157e+308,
            maxDate: 0,
            minDate: 1.7976931348623157e+308,
            minZ: 1.7976931348623157e+308,
            maxZ: -1.7976931348623157e+308,
            minXDiff: 1.7976931348623157e+308,
            yAxisScale: [
              {
                result: [
                  0,
                  100,
                  200,
                  300
                ],
                niceMin: 0,
                niceMax: 300
              }
            ],
            xAxisScale: null,
            xAxisTicksPositions: [],
            yLabelsCoords: [
              {
                width: 35.2159423828125,
                index: 0
              }
            ],
            yTitleCoords: [
              {
                width: 0,
                index: 0
              }
            ],
            barPadForNumericAxis: 0,
            padHorizontal: 0,
            xRange: null,
            yRange: [
              300
            ],
            zRange: null,
            dataPoints: 13,
            xTickAmount: 0,
            xyCharts: true,
            isBarHorizontal: false,
            chartClass: ".apexchartsjaru1",
            comboBarCount: 0,
            isRangeBar: false,
            stackedSeriesTotalsByGroups: [],
            xAxisHeight: 32.652,
            yLogRatio: [
              1.9953707398834701
            ],
            logYRange: [
              null
            ],
            barWidth: 25.925479360727163
          }
        },
        publicMethods: [
          "updateOptions",
          "updateSeries",
          "appendData",
          "appendSeries",
          "isSeriesHidden",
          "toggleSeries",
          "showSeries",
          "hideSeries",
          "setLocale",
          "resetSeries",
          "zoomX",
          "toggleDataPointSelection",
          "dataURI",
          "exportToCSV",
          "addXaxisAnnotation",
          "addYaxisAnnotation",
          "addPointAnnotation",
          "clearAnnotations",
          "removeAnnotation",
          "paper",
          "destroy"
        ],
        eventList: [
          "click",
          "mousedown",
          "mousemove",
          "mouseleave",
          "touchstart",
          "touchmove",
          "touchleave",
          "mouseup",
          "touchend"
        ],
        animations: {},
        axes: {},
        core: {},
        config: {
          opts: {}
        },
        data: {
          coreUtils: {},
          fallbackToCategory: true,
          activeSeriesIndex: 0
        },
        grid: {
          xaxisLabels: [
            "20",
            "",
            "25",
            "",
            "30",
            "",
            "35",
            "",
            "40",
            "",
            "60",
            "",
            "65"
          ],
          axesUtils: {},
          isRangeBar: 0,
          elg: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elgridLinesH: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elgridLinesV: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          },
          elGridBorders: {
            _stroke: "#000000",
            _event: null,
            dom: {},
            node: {},
            type: "g"
          }
        },
        graphics: {},
        coreUtils: {},
        crosshairs: {},
        events: {},
        exports: {},
        localization: {},
        options: {
          yAxis: {
            show: true,
            showAlways: false,
            showForNullSeries: true,
            opposite: false,
            reversed: false,
            logarithmic: false,
            logBase: 10,
            forceNiceScale: false,
            floating: false,
            labels: {
              show: true,
              minWidth: 0,
              maxWidth: 160,
              offsetX: 0,
              offsetY: 0,
              rotate: 0,
              padding: 20,
              style: {
                colors: [],
                fontSize: "11px",
                fontWeight: 400,
                cssClass: ""
              }
            },
            axisBorder: {
              show: false,
              color: "#e0e0e0",
              width: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: false,
              color: "#e0e0e0",
              width: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              rotate: -90,
              offsetY: 0,
              offsetX: 0,
              style: {
                fontSize: "11px",
                fontWeight: 900,
                cssClass: ""
              }
            },
            tooltip: {
              enabled: false,
              offsetX: 0
            },
            crosshairs: {
              show: true,
              position: "front",
              stroke: {
                color: "#b6b6b6",
                width: 1,
                dashArray: 0
              }
            }
          },
          pointAnnotation: {
            x: 0,
            y: null,
            yAxisIndex: 0,
            marker: {
              size: 4,
              fillColor: "#fff",
              strokeWidth: 2,
              strokeColor: "#333",
              shape: "circle",
              offsetX: 0,
              offsetY: 0,
              radius: 2,
              cssClass: ""
            },
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "middle",
              offsetX: 0,
              offsetY: 0,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            },
            customSVG: {
              offsetX: 0,
              offsetY: 0
            },
            image: {
              width: 20,
              height: 20,
              offsetX: 0,
              offsetY: 0
            }
          },
          yAxisAnnotation: {
            y: 0,
            y2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            width: "100%",
            yAxisIndex: 0,
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "end",
              position: "right",
              offsetX: 0,
              offsetY: -3,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          xAxisAnnotation: {
            x: 0,
            x2: null,
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            label: {
              borderColor: "#c2c2c2",
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: "middle",
              orientation: "vertical",
              position: "top",
              offsetX: 0,
              offsetY: 0,
              style: {
                background: "#fff",
                fontSize: "11px",
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          text: {
            x: 0,
            y: 0,
            text: "",
            textAnchor: "start",
            fontSize: "13px",
            fontWeight: 400,
            appendTo: ".apexcharts-annotations",
            backgroundColor: "transparent",
            borderColor: "#c2c2c2",
            borderRadius: 0,
            borderWidth: 0,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2
          }
        },
        responsive: {},
        series: {
          legendInactiveClass: "legend-mouseover-inactive"
        },
        theme: {
          colors: [],
          isColorFn: false,
          isHeatmapDistributed: false,
          isBarDistributed: false
        },
        formatters: {
          tooltipKeyFormat: "dd MMM"
        },
        titleSubtitle: {},
        legend: {
          isBarsDistributed: false,
          legendHelpers: {}
        },
        toolbar: {
          ev: {},
          selectedClass: "apexcharts-selected",
          minX: 1.7976931348623157e+308,
          maxX: -1.7976931348623157e+308
        },
        tooltip: {
          tooltipUtil: {},
          tooltipLabels: {
            tooltipUtil: {}
          },
          tooltipPosition: {},
          marker: {
            tooltipPosition: {}
          },
          intersect: {
            isVerticalGroupedRangeBar: false
          },
          axesTooltip: {},
          showOnIntersect: true,
          showTooltipTitle: true,
          fixedTooltip: false,
          xaxisTooltip: null,
          yaxisTTEls: null,
          isBarShared: false,
          lastHoverTime: 1704914409057
        },
        dimensions: {
          lgRect: {
            x: 768,
            y: 176,
            height: 14,
            width: 769
          },
          yAxisWidth: 40.2159423828125,
          yAxisWidthLeft: 40.2159423828125,
          yAxisWidthRight: 0,
          xAxisHeight: 32.652,
          isSparkline: false,
          dimHelpers: {},
          dimYAxis: {},
          dimXAxis: {},
          dimGrid: {},
          lgWidthForSideLegends: 0,
          xPadRight: 0,
          xPadLeft: 0,
          xAxisWidth: 13.875991821289062
        },
        updateHelpers: {},
        zoomPanSelection: {
          selectedClass: "apexcharts-selected",
          minX: 1.7976931348623157e+308,
          maxX: -1.7976931348623157e+308,
          dragged: false,
          graphics: {},
          eventList: [
            "mousedown",
            "mouseleave",
            "mousemove",
            "touchstart",
            "touchmove",
            "mouseup",
            "touchend"
          ],
          clientX: 0,
          clientY: 0,
          startX: 0,
          endX: 0,
          dragX: 0,
          startY: 0,
          endY: 0,
          dragY: 0,
          moveDirection: "none"
        },
        pie: {
          chartType: "bar",
          initialAnim: false,
          dynamicAnim: false,
          animBeginArr: [
            0
          ],
          animDur: 0,
          defaultSize: 150.348,
          centerY: 75.174,
          centerX: 306.39202880859375,
          fullAngle: 360,
          initialAngle: 0,
          donutSize: 41.82131707317074,
          maxY: 0,
          sliceLabels: [],
          sliceSizes: [],
          prevSectorAngleArr: []
        },
        rangeBar: {
          isHorizontal: false,
          strokeWidth: 2,
          isNullValue: false,
          isRangeBar: 0,
          isVerticalGroupedRangeBar: 0,
          isFunnel: false,
          xRatio: null,
          initialXRatio: null,
          invertedXRatio: null,
          invertedYRatio: 0.48956887221666767,
          baseLineInvertedY: 0.1,
          yaxisIndex: 0,
          seriesLen: 0,
          pathArr: [],
          lastActiveBarSerieIndex: 2,
          stackedSeriesTotals: [
            65,
            85,
            100,
            115,
            135,
            150,
            165,
            190,
            210,
            230,
            255,
            285,
            325
          ],
          barHelpers: {}
        },
        annotations: {
          graphics: {},
          helpers: {},
          xAxisAnnotations: {
            helpers: {}
          },
          yAxisAnnotations: {
            helpers: {}
          },
          pointsAnnotations: {
            helpers: {}
          },
          xDivision: 47.13723520132211
        }
      }
    }
  ]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();