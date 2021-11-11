interface DisplayElement {
  display: () => void;
}

interface Observer {
  update: (temp: number, humidity: number, pressure: number) => void;
}

interface Subject {
  registerObserver: (o: Observer) => void;
  removeObserver: (o: Observer) => void;
  notifyObservers: () => void;
}

class WeatherData implements Subject {
  observers: Observer[];
  temperature: number;
  humidity: number;
  pressure: number;

  constructor() {
    this.observers = [];

    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    const index = this.observers.indexOf(o);
    if (index > -1) {
      this.observers.splice(index);
    }
  }

  // Is there an attr_accessor type feature or am I always calling this?
  notifyObservers() {
    this.observers.forEach(observer =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  measurementsChanges() {
    this.notifyObservers();
  }

  setMeasurements(temp: number, humidity: number, pressure: number) {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanges();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.humidity = 0;
    this.temperature = 0;

    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(
      `Current Conditions: ${this.temperature} F degrees and ${this.humidity} humidity`
    );
  }
}

function exampleOne() {
  const weatherData = new WeatherData();

  const currentDisplay = new CurrentConditionsDisplay(weatherData);
  //TODO StatisticsDisplay and ForecastDisplay
  //
  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
}

class HeatIndexDisplay implements Observer, DisplayElement {
  private heatIndex: number;
  private humidity: number;
  private temperature: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.humidity = 0;
    this.temperature = 0;
    this.weatherData = weatherData;
    this.heatIndex = this.computeHeadIndex(this.temperature, this.humidity);

    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.heatIndex = this.computeHeadIndex(this.temperature, this.humidity);
    this.display();
  }

  display() {
    console.log(`Heat index is ${this.heatIndex}`);
  }

  computeHeadIndex(t: number, rh: number) {
    return (
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * (t * t) +
      0.00728898 * (rh * rh) +
      0.000345372 * (t * t * rh) -
      0.000814971 * (t * rh * rh) +
      0.0000102102 * (t * t * rh * rh) -
      0.000038646 * (t * t * t) +
      0.0000291583 * (rh * rh * rh) +
      0.00000142721 * (t * t * t * rh) +
      0.000000197483 * (t * rh * rh * rh) -
      0.0000000218429 * (t * t * t * rh * rh) +
      0.000000000843296 * (t * t * rh * rh * rh) -
      0.0000000000481975 * (t * t * t * rh * rh * rh)
    );
  }
}

function exampleTwo() {
  const weatherData = new WeatherData();

  const currentDisplay = new CurrentConditionsDisplay(weatherData);
  const heatIndexDisplay = new HeatIndexDisplay(weatherData);
  //TODO StatisticsDisplay and ForecastDisplay
  //
  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
}

import onStandardLibrary from './on-standard-library';

const ChapterTwo = {
  exampleOne,
  exampleTwo,
  onStandardLibrary,
};

export default ChapterTwo;
