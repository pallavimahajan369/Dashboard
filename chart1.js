
option = {
  annotations: {},
  chart: {
    animations: {
      enabled: false,
      dynamicAnimation: {
        speed: 800
      }
    },
    foreColor: "#333",
    fontFamily: "Roboto",
    height: 200,
    id: "YC7jx",
    stackOnlyBar: true,
    toolbar: {
      show: false
    },
    type: "radialBar",
    width: 150,
    height:200,
    margin:0,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
      hideZeroBarsWhenGrouped: false,
      isDumbbell: false,
      isFunnel: false,
      isFunnel3d: true,
      dataLabels: {
        total: {
          enabled: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "#373d3f",
            fontSize: "px",
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
        background: "#fff",
        dropShadow: {}
      },
      track: {
        startAngle: 0,
        endAngle: 0,
        background: "#DDF9F5"
      },
      dataLabels: {
        name: {},
        value: {
          fontSize: 30,
          fontWeight: 600
        },
        total: {}
      },
      barLabels: {
        enabled: false,
        margin: 5,
        useSeriesColors: true,
        fontWeight: 600,
        fontSize:"8px"
      }
    },
   
  },
  
  
  labels: [
    ""
  ],
  legend: {
    show: false,
    fontSize: 14,
    offsetY: 0,
    itemMargin: {
      vertical: 0
    }
  },
  series: [
    78
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
    enabled: false,
    hideEmptySeries: true,
    fillSeriesColor: true
  },
  xaxis: {
    labels: {
      trim: true,
      style: {}
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
    title: {
      style: {
        fontWeight: 700
      }
    }
  },
  yaxis: {
    labels: {
      style: {}
    },
    title: {
      style: {
        fontWeight: 700
      }
    }
  },
  theme: {
    palette: "palette4"
  },
  _chartInstances: [
    {
      id: "YC7jx",
      chart: {
        opts: {
          annotations: {
            position: "front",
            yaxis: [],
            xaxis: [],
            points: []
          },
          chart: {
            type: "radialBar",
            background: "",
            foreColor: "#333",
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
              left: 2,
              blur: 4,
              color: "#000",
              opacity: 0.35
            },
            fontFamily: "Roboto",
            height: 200,
            width: 200,
            id: "YC7jx"
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "70%",
              barHeight: "70%",
              distributed: false,
              borderRadius: 10,
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "last",
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: "top"
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
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                startAngle: 0,
                endAngle: 0,
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
                  offsetY: 0,
                  fontWeight: 600
                },
                value: {
                  show: true,
                  fontSize: 14,
                  offsetY: 16,
                  fontWeight: 400
                },
                total: {
                  show: false,
                  label: "Total",
                  fontSize: 16,
                  fontWeight: 600
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
            palette: "palette4"
          },
          dataLabels: {
            enabled: false,
            textAnchor: "middle",
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: 12,
              fontWeight: 700
            },
            background: {
              enabled: true,
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
            type: "category",
            offsetX: 0,
            offsetY: 0,
            position: "bottom",
            labels: {
              show: true,
              rotate: -45,
              rotateAlways: false,
              trim: true,
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 400
              }
            },
            axisBorder: {
              show: true,
              color: "#e0e0e0"
            },
            axisTicks: {
              show: true,
              color: "#e0e0e0"
            },
            title: {
              style: {
                fontSize: 12,
                fontWeight: 700
              }
            },
            crosshairs: {
              show: true,
              width: 1,
              position: "back",
              opacity: 0.9,
              stroke: {
                color: "#b6b6b6",
                width: 1
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
            convertedCatToNumeric: false
          },
          yaxis: [
            null
          ],
          grid: {
            show: true,
            borderColor: "#e0e0e0",
            strokeDashArray: 0,
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
              top: 0,
              right: 0,
              bottom: 12,
              left: 1
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
            },
            pattern: {
              style: "squares",
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          legend: {
            show: false,
            showForSingleSeries: false,
            floating: false,
            position: "bottom",
            horizontalAlign: "center",
            fontSize: 14,
            fontWeight: 400,
            offsetX: -20,
            offsetY: 0,
            labels: {
              useSeriesColors: false
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              strokeColor: "#fff",
              radius: 12
            },
            itemMargin: {
              horizontal: 5,
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
            chartID: "YC7jx",
            cuid: "8akvn0sz",
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
            colors: [
              "#4ecdc4",
              "#c7f464",
              "#81D4FA",
              "#fd6a6a",
              "#546E7A"
            ],
            clientX: 924,
            clientY: 238,
            fill: {
              colors: [
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A"
              ]
            },
            stroke: {},
            dataLabels: {
              style: {}
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
                0
              ],
              largestSize: 0
            },
            animationEnded: true,
            isDirty: true,
            isExecCalled: false,
            initialConfig: {
              fill: {
                type: "solid",
                opacity: 0.85,
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
              }
            },
            initialSeries: [
              78
            ],
            lastXAxis: [],
            lastYAxis: [],
            columnSeries: null,
            labels: [
              ""
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
            radialSize: 84.2439024390244,
            zoomEnabled: true,
            panEnabled: false,
            selectionEnabled: false,
            yaxis: null,
            mousedown: false,
            lastClientPosition: {},
            yValueDecimal: 0,
            total: 0,
            SVGNS: "http://www.w3.org/2000/svg",
            svgWidth: 200,
            svgHeight: 207,
            noData: false,
            locale: {
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
            },
            dom: {
              baseEl: {
                _prevClass: "YC7jx"
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
              elLegendForeign: {},
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
            delayedElements: [],
            axisCharts: false,
            isDataXYZ: false,
            resized: true,
            resizeTimer: null,
            comboCharts: false,
            dataChanged: true,
            previousPaths: [
              78
            ],
            allSeriesHasEqualX: true,
            pointsArray: [],
            dataLabelsRects: [],
            lastDrawnDataLabelsIndexes: [],
            hasNullValues: false,
            easing: "<>",
            zoomed: false,
            gridWidth: 187,
            gridHeight: 185,
            rotateXLabels: false,
            defaultLabels: false,
            yLabelFormatters: [
              null
            ],
            LINE_HEIGHT_RATIO: 1.618,
            xAxisLabelsHeight: 0,
            xAxisGroupLabelsHeight: 0,
            xAxisLabelsWidth: 0,
            yAxisLabelsWidth: 0,
            scaleX: 1,
            scaleY: 1,
            translateX: 11.5,
            translateY: 0,
            translateYAxisX: [],
            yAxisWidths: [],
            translateXAxisY: 0,
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
              showOnIntersect: false,
              showTooltipTitle: true,
              fixedTooltip: false,
              xaxisTooltip: null,
              yaxisTTEls: null,
              isBarShared: true,
              lastHoverTime: 1704920063916
            },
            series: [
              78
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
                100
              ]
            ],
            seriesGoals: [],
            seriesX: [],
            seriesZ: [],
            seriesNames: [
              ""
            ],
            seriesTotals: [
              78
            ],
            seriesLog: [],
            seriesColors: [],
            stackedSeriesTotals: [],
            seriesXvalues: [
              []
            ],
            seriesYvalues: [
              []
            ],
            hasXaxisGroups: false,
            groups: [],
            hasSeriesGroups: false,
            seriesGroups: [],
            categoryLabels: [],
            selectionResizeTimer: null,
            isXNumeric: false,
            isMultiLineX: false,
            isMultipleYAxis: false,
            maxY: -1.7976931348623157e+308,
            minY: 5e-324,
            minYArr: [],
            maxYArr: [],
            maxX: -1.7976931348623157e+308,
            minX: 1.7976931348623157e+308,
            initialMaxX: -1.7976931348623157e+308,
            initialMinX: 1.7976931348623157e+308,
            maxDate: 0,
            minDate: 1.7976931348623157e+308,
            minZ: 1.7976931348623157e+308,
            maxZ: -1.7976931348623157e+308,
            minXDiff: 1.7976931348623157e+308,
            yAxisScale: [],
            xAxisScale: null,
            xAxisTicksPositions: [],
            yLabelsCoords: [],
            yTitleCoords: [],
            barPadForNumericAxis: 0,
            padHorizontal: 0,
            xRange: 0,
            yRange: [],
            zRange: 0,
            dataPoints: 0,
            xTickAmount: 0,
            xyCharts: false,
            isBarHorizontal: false,
            chartClass: ".apexchartsYC7jx",
            comboBarCount: 0
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
          twoDSeries: [],
          threeDSeries: [],
          twoDSeriesX: [],
          seriesGoals: [],
          coreUtils: {},
          fallbackToCategory: false
        },
        grid: {
          xaxisLabels: [
            ""
          ],
          axesUtils: {},
          isRangeBar: 0
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
          showOnIntersect: false,
          showTooltipTitle: true,
          fixedTooltip: false,
          xaxisTooltip: null,
          yaxisTTEls: null,
          isBarShared: true,
          lastHoverTime: 1704920063915
        },
        dimensions: {
          lgRect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          yAxisWidth: 0,
          yAxisWidthLeft: 0,
          yAxisWidthRight: 0,
          xAxisHeight: 0,
          isSparkline: false,
          dimHelpers: {},
          dimYAxis: {},
          dimXAxis: {},
          dimGrid: {},
          lgWidthForSideLegends: 0,
          xPadRight: 0,
          xPadLeft: 0
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
          chartType: "radialBar",
          initialAnim: false,
          dynamicAnim: false,
          animBeginArr: [
            0
          ],
          animDur: 0,
          defaultSize: 185,
          centerY: 92.5,
          centerX: 93.5,
          fullAngle: 360,
          initialAngle: 0,
          donutSize: 54.75853658536585,
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
          xyRatios: null,
          yaxisIndex: 0,
          seriesLen: 0,
          pathArr: [],
          lastActiveBarSerieIndex: 0,
          stackedSeriesTotals: [],
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
          xDivision: null
        }
      }
    },
    {
      id: "1H4SA",
      chart: {
        opts: {
          annotations: {
            position: "front",
            yaxis: [],
            xaxis: [],
            points: []
          },
          chart: {
            type: "radialBar",
            background: "",
            foreColor: "#333",
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
              left: 2,
              blur: 4,
              color: "#000",
              opacity: 0.35
            },
            fontFamily: "Roboto",
            height: 257,
            width: 251,
            id: "1H4SA"
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "70%",
              barHeight: "70%",
              distributed: false,
              borderRadius: 10,
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "last",
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: "top"
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
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                startAngle: 0,
                endAngle: 0,
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
                  offsetY: 0,
                  fontWeight: 600
                },
                value: {
                  show: true,
                  fontSize: 14,
                  offsetY: 16,
                  fontWeight: 400
                },
                total: {
                  show: false,
                  label: "Total",
                  fontSize: 16,
                  fontWeight: 600
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
            palette: "palette4"
          },
          dataLabels: {
            enabled: false,
            textAnchor: "middle",
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: 12,
              fontWeight: 700
            },
            background: {
              enabled: true,
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
          yaxis: [
            {
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
                  fontSize: 11,
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
                  fontSize: 11,
                  fontWeight: 700,
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
            strokeDashArray: 0,
            position: "back",
            padding: {
              top: 0,
              right: 0,
              bottom: 12,
              left: 1
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
            },
            pattern: {
              style: "squares",
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          legend: {
            show: false,
            showForSingleSeries: false,
            floating: false,
            position: "bottom",
            horizontalAlign: "center",
            fontSize: 14,
            fontWeight: 400,
            offsetX: -20,
            offsetY: 0,
            labels: {
              useSeriesColors: false
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              strokeColor: "#fff",
              radius: 12
            },
            itemMargin: {
              horizontal: 5,
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
                easing: "easeinout",
                speed: 800,
                animateGradually: {
                  delay: 150,
                  enabled: true
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 800
                }
              },
              background: "",
              locales: [
                {
                  name: "en",
                  options: {
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
                left: 2,
                blur: 4,
                color: "#000",
                opacity: 0.35
              },
              events: {},
              foreColor: "#333",
              fontFamily: "Roboto",
              height: 209,
              parentHeightOffset: 15,
              redrawOnParentResize: true,
              redrawOnWindowResize: true,
              id: "1H4SA",
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
              stacked: false,
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
              type: "radialBar",
              width: 187,
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
              }
            },
            plotOptions: {
              area: {
                fillTo: "origin"
              },
              bar: {
                horizontal: false,
                columnWidth: "70%",
                barHeight: "70%",
                distributed: false,
                borderRadius: 10,
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
                  position: "top",
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
                    opacity: 0.5
                  }
                },
                track: {
                  show: true,
                  startAngle: 0,
                  endAngle: 0,
                  background: "#DDF9F5",
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
                    fontSize: 30,
                    fontWeight: 600,
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
                  fontSize:"8px"
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
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 700
              },
              background: {
                enabled: true,
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
              opacity: 0.85,
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
              strokeDashArray: 0,
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
                top: 0,
                right: 0,
                bottom: 12,
                left: 10
              }
            },
            legend: {
              show: false,
              showForSingleSeries: false,
              showForNullSeries: true,
              showForZeroSeries: true,
              floating: false,
              position: "bottom",
              horizontalAlign: "center",
              inverseOrder: false,
              fontSize: 14,
              fontWeight: 400,
              offsetX: -20,
              offsetY: 0,
              customLegendItems: [],
              labels: {
                useSeriesColors: false
              },
              markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: "#fff",
                radius: 12,
                offsetX: 0,
                offsetY: 0
              },
              itemMargin: {
                horizontal: 5,
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
              enabled: false,
              shared: true,
              hideEmptySeries: true,
              followCursor: false,
              intersect: false,
              inverseOrder: false,
              fillSeriesColor: true,
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
              type: "category",
              categories: [],
              convertedCatToNumeric: false,
              offsetX: 0,
              offsetY: 0,
              labels: {
                show: true,
                rotate: -45,
                rotateAlways: false,
                hideOverlappingLabels: true,
                trim: true,
                maxHeight: 120,
                showDuplicates: true,
                style: {
                  fontSize: 12,
                  fontWeight: 400,
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
                show: true,
                color: "#e0e0e0",
                width: "100%",
                height: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: true,
                color: "#e0e0e0",
                height: 6,
                offsetX: 0,
                offsetY: 0
              },
              tickPlacement: "on",
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
                enabled: true,
                offsetY: 0,
                style: {
                  fontSize: "12px"
                }
              }
            },
            theme: {
              mode: "light",
              palette: "palette4",
              monochrome: {
                enabled: false,
                color: "#008FFB",
                shadeTo: "light",
                shadeIntensity: 0.65
              }
            }
          },
          globals: {
            chartID: "1H4SA",
            cuid: "3ywywle5",
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
            colors: [
              "#4ecdc4",
              "#c7f464",
              "#81D4FA",
              "#fd6a6a",
              "#546E7A"
            ],
            clientX: 1081,
            clientY: 224,
            fill: {
              colors: [
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A"
              ]
            },
            stroke: {},
            dataLabels: {
              style: {}
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
                0
              ],
              largestSize: 0
            },
            animationEnded: true,
            isDirty: true,
            isExecCalled: false,
            initialConfig: {},
            initialSeries: [
              95
            ],
            lastXAxis: [],
            lastYAxis: [],
            columnSeries: null,
            labels: [
              ""
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
            radialSize: 85.21951219512196,
            zoomEnabled: true,
            panEnabled: false,
            selectionEnabled: false,
            yaxis: null,
            mousedown: false,
            lastClientPosition: {},
            yValueDecimal: 0,
            total: 0,
            SVGNS: "http://www.w3.org/2000/svg",
            svgWidth: 187,
            svgHeight: 209,
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
                _prevClass: "1H4SA"
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
              elLegendForeign: {},
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
            delayedElements: [],
            axisCharts: false,
            isDataXYZ: false,
            resized: true,
            resizeTimer: null,
            comboCharts: false,
            dataChanged: true,
            previousPaths: [
              78
            ],
            allSeriesHasEqualX: true,
            pointsArray: [],
            dataLabelsRects: [],
            lastDrawnDataLabelsIndexes: [],
            hasNullValues: false,
            easing: "<>",
            zoomed: false,
            gridWidth: 189,
            gridHeight: 187,
            rotateXLabels: false,
            defaultLabels: false,
            yLabelFormatters: [
              null
            ],
            LINE_HEIGHT_RATIO: 1.618,
            xAxisLabelsHeight: 0,
            xAxisGroupLabelsHeight: 0,
            xAxisLabelsWidth: 0,
            yAxisLabelsWidth: 0,
            scaleX: 1,
            scaleY: 1,
            translateX: 4,
            translateY: 0,
            translateYAxisX: [],
            yAxisWidths: [],
            translateXAxisY: 0,
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
              showOnIntersect: false,
              showTooltipTitle: true,
              fixedTooltip: false,
              xaxisTooltip: null,
              yaxisTTEls: null,
              isBarShared: true,
              lastHoverTime: 1704920130047
            },
            series: [
              95
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
                100
              ]
            ],
            seriesGoals: [],
            seriesX: [],
            seriesZ: [],
            seriesNames: [
              ""
            ],
            seriesTotals: [
              95
            ],
            seriesLog: [],
            seriesColors: [],
            stackedSeriesTotals: [],
            seriesXvalues: [
              []
            ],
            seriesYvalues: [
              []
            ],
            hasXaxisGroups: false,
            groups: [],
            hasSeriesGroups: false,
            seriesGroups: [],
            categoryLabels: [],
            selectionResizeTimer: null,
            isXNumeric: false,
            isMultiLineX: false,
            isMultipleYAxis: false,
            maxY: -1.7976931348623157e+308,
            minY: 5e-324,
            minYArr: [],
            maxYArr: [],
            maxX: -1.7976931348623157e+308,
            minX: 1.7976931348623157e+308,
            initialMaxX: -1.7976931348623157e+308,
            initialMinX: 1.7976931348623157e+308,
            maxDate: 0,
            minDate: 1.7976931348623157e+308,
            minZ: 1.7976931348623157e+308,
            maxZ: -1.7976931348623157e+308,
            minXDiff: 1.7976931348623157e+308,
            yAxisScale: [],
            xAxisScale: null,
            xAxisTicksPositions: [],
            yLabelsCoords: [],
            yTitleCoords: [],
            barPadForNumericAxis: 0,
            padHorizontal: 0,
            xRange: 0,
            yRange: [],
            zRange: 0,
            dataPoints: 0,
            xTickAmount: 0,
            xyCharts: false,
            isBarHorizontal: false,
            chartClass: ".apexcharts1H4SA",
            comboBarCount: 0
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
          twoDSeries: [],
          threeDSeries: [],
          twoDSeriesX: [],
          seriesGoals: [],
          coreUtils: {},
          fallbackToCategory: false
        },
        grid: {
          xaxisLabels: [
            ""
          ],
          axesUtils: {},
          isRangeBar: 0
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
          showOnIntersect: false,
          showTooltipTitle: true,
          fixedTooltip: false,
          xaxisTooltip: null,
          yaxisTTEls: null,
          isBarShared: true,
          lastHoverTime: 1704920130047
        },
        dimensions: {
          lgRect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          yAxisWidth: 0,
          yAxisWidthLeft: 0,
          yAxisWidthRight: 0,
          xAxisHeight: 0,
          isSparkline: false,
          dimHelpers: {},
          dimYAxis: {},
          dimXAxis: {},
          dimGrid: {},
          lgWidthForSideLegends: 0,
          xPadRight: 0,
          xPadLeft: 0
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
          chartType: "radialBar",
          initialAnim: false,
          dynamicAnim: false,
          animBeginArr: [
            0
          ],
          animDur: 0,
          defaultSize: 187,
          centerY: 93.5,
          centerX: 94.5,
          fullAngle: 360,
          initialAngle: 0,
          donutSize: 55.39268292682927,
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
          xyRatios: null,
          yaxisIndex: 0,
          seriesLen: 0,
          pathArr: [],
          lastActiveBarSerieIndex: 0,
          stackedSeriesTotals: [],
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
          xDivision: null
        }
      }
    },
    {
      id: "wIgaZ",
      chart: {
        opts: {
          annotations: {
            position: "front",
            yaxis: [],
            xaxis: [],
            points: []
          },
          chart: {
            type: "radialBar",
            background: "",
            foreColor: "#333",
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
              left: 2,
              blur: 4,
              color: "#000",
              opacity: 0.35
            },
            fontFamily: "Roboto",
            height: 257,
            width: 251,
            id: "wIgaZ"
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "70%",
              barHeight: "70%",
              distributed: false,
              borderRadius: 10,
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "last",
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: "top"
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
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                startAngle: 0,
                endAngle: 0,
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
                  offsetY: 0,
                  fontWeight: 600
                },
                value: {
                  show: true,
                  fontSize: 14,
                  offsetY: 16,
                  fontWeight: 400
                },
                total: {
                  show: false,
                  label: "Total",
                  fontSize: 16,
                  fontWeight: 600
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
            palette: "palette4"
          },
          dataLabels: {
            enabled: false,
            textAnchor: "middle",
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: 12,
              fontWeight: 700
            },
            background: {
              enabled: true,
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
          yaxis: [
            {
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
                  fontSize: 11,
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
                  fontSize: 11,
                  fontWeight: 700,
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
            strokeDashArray: 0,
            position: "back",
            padding: {
              top: 0,
              right: 0,
              bottom: 12,
              left: 1
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
            },
            pattern: {
              style: "squares",
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          legend: {
            show: false,
            showForSingleSeries: false,
            floating: false,
            position: "bottom",
            horizontalAlign: "center",
            fontSize: 14,
            fontWeight: 400,
            offsetX: -20,
            offsetY: 0,
            labels: {
              useSeriesColors: false
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              strokeColor: "#fff",
              radius: 12
            },
            itemMargin: {
              horizontal: 5,
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
                easing: "easeinout",
                speed: 800,
                animateGradually: {
                  delay: 150,
                  enabled: true
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 800
                }
              },
              background: "",
              locales: [
                null
              ],
              defaultLocale: "en",
              dropShadow: {
                enabled: false,
                top: 2,
                left: 2,
                blur: 4,
                color: "#000",
                opacity: 0.35
              },
              events: {},
              foreColor: "#333",
              fontFamily: "Roboto",
              height: 210,
              parentHeightOffset: 15,
              redrawOnParentResize: true,
              redrawOnWindowResize: true,
              id: "wIgaZ",
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
              stacked: false,
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
              type: "radialBar",
              width: 179,
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
              }
            },
            plotOptions: {
              area: {
                fillTo: "origin"
              },
              bar: {
                horizontal: false,
                columnWidth: "70%",
                barHeight: "70%",
                distributed: false,
                borderRadius: 10,
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
                  position: "top",
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
                    opacity: 0.5
                  }
                },
                track: {
                  show: true,
                  startAngle: 0,
                  endAngle: 0,
                  background: "#DDF9F5",
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
                    fontSize: 30,
                    fontWeight: 600,
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
                  fontSize:"8px"
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
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 700
              },
              background: {
                enabled: true,
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
              opacity: 0.85,
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
              strokeDashArray: 0,
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
                top: 0,
                right: 0,
                bottom: 12,
                left: 10
              }
            },
            legend: {
              show: false,
              showForSingleSeries: false,
              showForNullSeries: true,
              showForZeroSeries: true,
              floating: false,
              position: "bottom",
              horizontalAlign: "center",
              inverseOrder: false,
              fontSize: 14,
              fontWeight: 400,
              offsetX: -20,
              offsetY: 0,
              customLegendItems: [],
              labels: {
                useSeriesColors: false
              },
              markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: "#fff",
                radius: 12,
                offsetX: 0,
                offsetY: 0
              },
              itemMargin: {
                horizontal: 5,
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
              enabled: false,
              shared: true,
              hideEmptySeries: true,
              followCursor: false,
              intersect: false,
              inverseOrder: false,
              fillSeriesColor: true,
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
              type: "category",
              categories: [],
              convertedCatToNumeric: false,
              offsetX: 0,
              offsetY: 0,
              labels: {
                show: true,
                rotate: -45,
                rotateAlways: false,
                hideOverlappingLabels: true,
                trim: true,
                maxHeight: 120,
                showDuplicates: true,
                style: {
                  fontSize: 12,
                  fontWeight: 400,
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
                show: true,
                color: "#e0e0e0",
                width: "100%",
                height: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: true,
                color: "#e0e0e0",
                height: 6,
                offsetX: 0,
                offsetY: 0
              },
              tickPlacement: "on",
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
                enabled: true,
                offsetY: 0,
                style: {
                  fontSize: "12px"
                }
              }
            },
            theme: {
              mode: "light",
              palette: "palette4",
              monochrome: {
                enabled: false,
                color: "#008FFB",
                shadeTo: "light",
                shadeIntensity: 0.65
              }
            }
          },
          globals: {
            chartID: "wIgaZ",
            cuid: "063j7ds3",
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
            colors: [
              "#4ecdc4",
              "#c7f464",
              "#81D4FA",
              "#fd6a6a",
              "#546E7A"
            ],
            clientX: 1337,
            clientY: 235,
            fill: {
              colors: [
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A",
                "#4ecdc4",
                "#c7f464",
                "#81D4FA",
                "#fd6a6a",
                "#546E7A"
              ]
            },
            stroke: {},
            dataLabels: {
              style: {}
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
                0
              ],
              largestSize: 0
            },
            animationEnded: true,
            isDirty: true,
            isExecCalled: false,
            initialConfig: {},
            initialSeries: [
              59
            ],
            lastXAxis: [],
            lastYAxis: [],
            columnSeries: null,
            labels: [
              ""
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
            radialSize: 85.70731707317074,
            zoomEnabled: true,
            panEnabled: false,
            selectionEnabled: false,
            yaxis: null,
            mousedown: false,
            lastClientPosition: {},
            yValueDecimal: 0,
            total: 0,
            SVGNS: "http://www.w3.org/2000/svg",
            svgWidth: 179,
            svgHeight: 210,
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
                _prevClass: "wIgaZ"
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
              elLegendForeign: {},
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
            delayedElements: [],
            axisCharts: false,
            isDataXYZ: false,
            resized: true,
            resizeTimer: null,
            comboCharts: false,
            dataChanged: true,
            previousPaths: [
              78
            ],
            allSeriesHasEqualX: true,
            pointsArray: [],
            dataLabelsRects: [],
            lastDrawnDataLabelsIndexes: [],
            hasNullValues: false,
            easing: "<>",
            zoomed: false,
            gridWidth: 190,
            gridHeight: 188,
            rotateXLabels: false,
            defaultLabels: false,
            yLabelFormatters: [
              null
            ],
            LINE_HEIGHT_RATIO: 1.618,
            xAxisLabelsHeight: 0,
            xAxisGroupLabelsHeight: 0,
            xAxisLabelsWidth: 0,
            yAxisLabelsWidth: 0,
            scaleX: 1,
            scaleY: 1,
            translateX: -0.5,
            translateY: 0,
            translateYAxisX: [],
            yAxisWidths: [],
            translateXAxisY: 0,
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
              showOnIntersect: false,
              showTooltipTitle: true,
              fixedTooltip: false,
              xaxisTooltip: null,
              yaxisTTEls: null,
              isBarShared: true,
              lastHoverTime: 1704920146653
            },
            series: [
              59
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
                100
              ]
            ],
            seriesGoals: [],
            seriesX: [],
            seriesZ: [],
            seriesNames: [
              ""
            ],
            seriesTotals: [
              59
            ],
            seriesLog: [],
            seriesColors: [],
            stackedSeriesTotals: [],
            seriesXvalues: [
              []
            ],
            seriesYvalues: [
              []
            ],
            hasXaxisGroups: false,
            groups: [],
            hasSeriesGroups: false,
            seriesGroups: [],
            categoryLabels: [],
            selectionResizeTimer: null,
            isXNumeric: false,
            isMultiLineX: false,
            isMultipleYAxis: false,
            maxY: -1.7976931348623157e+308,
            minY: 5e-324,
            minYArr: [],
            maxYArr: [],
            maxX: -1.7976931348623157e+308,
            minX: 1.7976931348623157e+308,
            initialMaxX: -1.7976931348623157e+308,
            initialMinX: 1.7976931348623157e+308,
            maxDate: 0,
            minDate: 1.7976931348623157e+308,
            minZ: 1.7976931348623157e+308,
            maxZ: -1.7976931348623157e+308,
            minXDiff: 1.7976931348623157e+308,
            yAxisScale: [],
            xAxisScale: null,
            xAxisTicksPositions: [],
            yLabelsCoords: [],
            yTitleCoords: [],
            barPadForNumericAxis: 0,
            padHorizontal: 0,
            xRange: 0,
            yRange: [],
            zRange: 0,
            dataPoints: 0,
            xTickAmount: 0,
            xyCharts: false,
            isBarHorizontal: false,
            chartClass: ".apexchartswIgaZ",
            comboBarCount: 0
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
          twoDSeries: [],
          threeDSeries: [],
          twoDSeriesX: [],
          seriesGoals: [],
          coreUtils: {},
          fallbackToCategory: false
        },
        grid: {
          xaxisLabels: [
            ""
          ],
          axesUtils: {},
          isRangeBar: 0
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
          showOnIntersect: false,
          showTooltipTitle: true,
          fixedTooltip: false,
          xaxisTooltip: null,
          yaxisTTEls: null,
          isBarShared: true,
          lastHoverTime: 1704920146653
        },
        dimensions: {
          lgRect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          yAxisWidth: 0,
          yAxisWidthLeft: 0,
          yAxisWidthRight: 0,
          xAxisHeight: 0,
          isSparkline: false,
          dimHelpers: {},
          dimYAxis: {},
          dimXAxis: {},
          dimGrid: {},
          lgWidthForSideLegends: 0,
          xPadRight: 0,
          xPadLeft: 0
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
          chartType: "radialBar",
          initialAnim: false,
          dynamicAnim: false,
          animBeginArr: [
            0
          ],
          animDur: 0,
          defaultSize: 188,
          centerY: 94,
          centerX: 95,
          fullAngle: 360,
          initialAngle: 0,
          donutSize: 55.709756097560984,
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
          xyRatios: null,
          yaxisIndex: 0,
          seriesLen: 0,
          pathArr: [],
          lastActiveBarSerieIndex: 0,
          stackedSeriesTotals: [],
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
          xDivision: null
        }
      }
    }
  ]
};
var chart = new ApexCharts(document.querySelector("#chart1"), option);
        chart.render();
     
   
     
   