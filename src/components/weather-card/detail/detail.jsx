import {WeatherDay} from '../../../const';

export default function Detail({onChangeDay, weatherDay, weather}) {
  const entities = Object.entries(weather);
  return (
    <>
      <dl className="card__details details">
        {entities.map(([title, value]) => (
          <div key={title} className="details__group">
            <dt>{title}</dt>
            <dt>{value}</dt>
          </div>
        ))}
      </dl>
      <div className="card__toggle toggle">
        <input
          onChange={onChangeDay}
          checked={weatherDay === WeatherDay.Today}
          className="toggle__radio"
          type="radio"
          name="day"
          id="today"
        />
        <label
          className="toggle__label"
          htmlFor="today"
        >
          Today
        </label>
        <input
          onChange={onChangeDay}
          checked={weatherDay === WeatherDay.Tomorrow}
          className="toggle__radio"
          type="radio"
          name="day"
          id="tomorrow"
        />
        <label className="toggle__label" htmlFor="tomorrow">+ One Day</label>

        <input
          onChange={onChangeDay}
          checked={weatherDay === WeatherDay.TwoDays}
          className="toggle__radio"
          type="radio"
          name="day"
          id="two_days"
        />
        <label className="toggle__label" htmlFor="two_days">+ Two Days</label>

        <input
          onChange={onChangeDay}
          checked={weatherDay === WeatherDay.ThreeDays}
          className="toggle__radio"
          type="radio"
          name="day"
          id="three_days"
        />
        <label className="toggle__label" htmlFor="three_days">+ Three Days</label>

        <input
          onChange={onChangeDay}
          checked={weatherDay === WeatherDay.FourDays}
          className="toggle__radio"
          type="radio"
          name="day"
          id="four_days"
        />
        <label className="toggle__label" htmlFor="four_days">+ Four Days</label>

        <input
          onChange={onChangeDay}
          checked={weatherDay === WeatherDay.FiveDays}
          className="toggle__radio"
          type="radio"
          name="day"
          id="five_days"
        />
        <label className="toggle__label" htmlFor="five_days">+ Five Days</label>
      </div>
    </>
  );
}
