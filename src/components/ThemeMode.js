import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "../utils/configSlice";

const ThemeMode = () => {
  const selectThemeMode = useSelector((store) => store.config.themeMode);
  const dispatch = useDispatch();
  const handleThemeMode = () => {
    const newThemeMode = selectThemeMode === "light" ? "dark" : "light";
    dispatch(setThemeMode(newThemeMode));
    document.documentElement.setAttribute("data-theme", newThemeMode);
  };
  return (
    <div class="theme-change-button">
      <button
        onClick={handleThemeMode}
        className="color-mode__btn light--hidden cta-button"
        aria-label="Toggle mode"
      >
        {selectThemeMode === "light" ? (
          <>
            Dark Mode
            <svg
              role="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.0009 12.79C20.8436 14.4922 20.2047 16.1144 19.1591 17.4668C18.1135 18.8192 16.7044 19.8458 15.0966 20.4265C13.4888 21.0073 11.7489 21.1181 10.0804 20.7461C8.4119 20.3741 6.88387 19.5345 5.6751 18.3258C4.46633 17.117 3.62682 15.589 3.25479 13.9205C2.88275 12.252 2.99359 10.5121 3.57434 8.9043C4.15508 7.29651 5.18171 5.88737 6.53409 4.84175C7.88647 3.79614 9.50867 3.15731 11.2109 3C10.2143 4.34827 9.73473 6.00945 9.85941 7.68141C9.98409 9.35338 10.7047 10.9251 11.8903 12.1106C13.0758 13.2961 14.6475 14.0168 16.3195 14.1415C17.9914 14.2662 19.6526 13.7866 21.0009 12.79Z"
                stroke="#00B5AC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </>
        ) : (
          <>
            Light Mode
            <svg
              role="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              {" "}
              <g id="sun" clip-path="url(#clip0_3215_458)">
                {" "}
                <path
                  id="Vector"
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  id="Vector_2"
                  d="M12 1V3"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  id="Vector_3"
                  d="M12 21V23"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  id="Vector_4"
                  d="M4.2207 4.22021L5.6407 5.64021"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  id="Vector_5"
                  d="M18.3594 18.3599L19.7794 19.7799"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  id="Vector_6"
                  d="M1 12H3"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  id="Vector_7"
                  d="M21 12H23"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  id="Vector_8"
                  d="M4.2207 19.7799L5.6407 18.3599"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  id="Vector_9"
                  d="M18.3594 5.64021L19.7794 4.22021"
                  stroke="#00B5AC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_3215_458">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeMode;
