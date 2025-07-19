import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  Factory, Gauge, Thermometer, Wind, Droplets, DollarSign, 
  Clock, TrendingUp, Activity, Zap
} from 'lucide-react';
import { pyrolysisData, PyrolysisDataPoint } from '@/data/pyrolysisData';

const Dashboard = () => {
  const [selectedHour, setSelectedHour] = useState([12]);
  const currentData = pyrolysisData[selectedHour[0]];
  
  // Prepare data for different charts
  const temperatureData = pyrolysisData.map(d => ({
    hour: d.hour,
    reactor: d.reactor_temperature_C,
    ambient: d.ambient_temperature_C
  }));

  const gasCompositionData = Object.entries(currentData.gas_composition).map(([gas, value]) => ({
    name: gas,
    value: Number((value * 100).toFixed(2)),
    fill: gas === 'CH4' ? '#8884d8' : gas === 'C2H4' ? '#82ca9d' : gas === 'C3H8' ? '#ffc658' : gas === 'CO2' ? '#ff7300' : '#888888'
  }));

  const efficiencyData = pyrolysisData.map(d => ({
    hour: d.hour,
    efficiency: d.efficiency_pct,
    profit: d.profit_USD / 10 // Scale for better visualization
  }));

  const stageColors: Record<string, string> = {
    'Feeding': '#ef4444',
    'Heating': '#f97316', 
    'Pyrolysis': '#22c55e',
    'Cooling': '#3b82f6'
  };

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'Feeding': return <Factory className="w-4 h-4" />;
      case 'Heating': return <Thermometer className="w-4 h-4" />;
      case 'Pyrolysis': return <Zap className="w-4 h-4" />;
      case 'Cooling': return <Wind className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-card-gradient rounded-lg p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground flex items-center gap-3">
                <Factory className="w-8 h-8 text-primary" />
                Pyrolysis Plant Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Design of a pyrolyser model for the conversion of thermoplastics into fuels
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Current Time</div>
              <div className="text-2xl font-bold text-foreground">{selectedHour[0].toString().padStart(2, '0')}:00</div>
            </div>
          </div>
          
          {/* Time Control */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Select Time (Hour)</span>
            </div>
            <Slider
              value={selectedHour}
              onValueChange={setSelectedHour}
              max={23}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>00:00</span>
              <span>12:00</span>
              <span>23:00</span>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card-gradient shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Processing Stage</p>
                  <div className="flex items-center gap-2 mt-1">
                    {getStageIcon(currentData.processing_stage)}
                    <span className="text-xl font-bold text-foreground">{currentData.processing_stage}</span>
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className="text-xs"
                  style={{ backgroundColor: (stageColors[currentData.processing_stage] || '#888888') + '20' }}
                >
                  {currentData.stage_progress_pct}%
                </Badge>
              </div>
              <Progress value={currentData.stage_progress_pct} className="mt-3" />
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Reactor Temperature</p>
                  <p className="text-2xl font-bold text-foreground">{currentData.reactor_temperature_C}°C</p>
                </div>
                <Thermometer className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Ambient: {currentData.ambient_temperature_C}°C
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Efficiency</p>
                  <p className="text-2xl font-bold text-foreground">{currentData.efficiency_pct}%</p>
                </div>
                <Gauge className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Time to complete: {currentData.time_to_complete_min}min
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profit</p>
                  <p className="text-2xl font-bold text-foreground">${currentData.profit_USD}</p>
                </div>
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Input: {currentData.waste_input_kg}kg waste
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Temperature Monitoring */}
          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-primary" />
                Temperature Monitoring (24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="hour" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="reactor" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Reactor Temp (°C)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ambient" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={2}
                    name="Ambient Temp (°C)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Gas Composition */}
          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-primary" />
                Gas Composition (Hour {selectedHour[0]})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={gasCompositionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => value > 0 ? `${name}: ${value}%` : ''}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {gasCompositionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                    formatter={(value) => [`${value}%`, 'Composition']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Efficiency & Profit Trends */}
          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Efficiency & Profit (24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={efficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="hour" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="efficiency" 
                    stackId="1"
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    name="Efficiency (%)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="profit" 
                    stackId="2"
                    stroke="hsl(var(--accent))" 
                    fill="hsl(var(--accent))"
                    fillOpacity={0.3}
                    name="Profit (USD/10)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Environmental Conditions */}
          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-primary" />
                Environmental Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Ambient Humidity</span>
                <span className="text-lg font-semibold text-foreground">{currentData.ambient_humidity_pct}%</span>
              </div>
              <Progress value={currentData.ambient_humidity_pct} className="h-2" />
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <Thermometer className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Ambient</div>
                  <div className="text-xl font-bold text-foreground">{currentData.ambient_temperature_C}°C</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <Factory className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Waste Input</div>
                  <div className="text-xl font-bold text-foreground">{currentData.waste_input_kg}kg</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Timeline */}
        <Card className="bg-card-gradient shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Process Timeline (24h Overview)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[...Array(24)].map((_, hour) => {
                const data = pyrolysisData[hour];
                const isSelected = hour === selectedHour[0];
                return (
                  <div 
                    key={hour}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all cursor-pointer ${
                      isSelected ? 'bg-primary/10 border border-primary/20' : 'bg-accent/5 hover:bg-accent/10'
                    }`}
                    onClick={() => setSelectedHour([hour])}
                  >
                    <div className="text-sm font-medium text-foreground w-12">
                      {hour.toString().padStart(2, '0')}:00
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      {getStageIcon(data.processing_stage)}
                      <span className="text-sm text-foreground">{data.processing_stage}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {data.reactor_temperature_C}°C
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {data.efficiency_pct}%
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      ${data.profit_USD}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;