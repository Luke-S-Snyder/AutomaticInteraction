async function createScatterPlot() {
    let data = await d3.csv('/examples/data/penguins.csv', d3.autoType);
    data = data.filter(d => d.sex != null);

    const p = Plot.plot({
        inset: 8,
        grid: true,
        color: {
          legend: false,
          style: { marginLeft: 500 }
        },
        marks: [
          Plot.dot(data, {x: "flipper_length_mm", y: "body_mass_g", stroke: "sex"}),
          Plot.axisY({ label: "↑ body_mass_g", marginLeft: 50 }),
        ]
      });
   
    d3.select(p).attr('id', 'chart1');
    d3.select('#container').node().append(p);
    AutomaticInteraction.hydrate("#chart1");
}
