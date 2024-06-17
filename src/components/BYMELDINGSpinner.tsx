import "./Spinner.css";

interface SpinnerProps {
  fullscreen?: boolean;
  inline?: boolean;
}

const Spinner = ({
  fullscreen = true,
  inline = false,
}: SpinnerProps): JSX.Element => (
  <>
    {!inline ? (
      <div
        className={`bymelding-spinner fade-in fixed ${
          fullscreen
            ? "bymelding-spinner-large bg-black-backdrop"
            : "bymelding-spinner-small mx-auto p-4 rounded-full h-16 w-16"
        } bg-black`}
      >
        <div className="flex flex-col justify-around w-full h-full">
          <div className="m-auto lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    ) : (
      <div className="bymelding-spinner-inline fade-in">
        <div className="m-auto lds-ellipsis">
          <div>bymelding spinner</div>
          <div />
          <div />
          <div />
        </div>
      </div>
    )}
  </>
);

export default Spinner;
