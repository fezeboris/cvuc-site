import React from "react";

function Filter() {
  return (
    <>
      <div className="filter">
      {/* ©© */}
          {/* <div className="filter__name">
            <p>User</p>
          </div>

          <div
            className="btn-group filter__items1"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" className="btn btn-primary">
              Username
            </button>
            <button
              type="button"
              className="btn btn-secondary mr-0 ml-0 pr-0 pl-0"
              disabled
            ></button>
            <button type="button" className="btn btn-secondary">
              Firsrname
            </button>
            <button
              type="button"
              className="btn btn-secondary mr-0 ml-0 pr-0 pl-0"
              disabled
            ></button>
            <button type="button" className="btn btn-secondary">
              Lastname
            </button>
          </div>
        </div> */}
        <div>
          <div className="filter__status">
            <p>Actif</p>
          </div>

          <div
            className="btn-group filter__items1"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" className="btn btn-primary">
              --
            </button>
            <button
              type="button"
              className="btn btn-secondary mr-0 ml-0 pr-0 pl-0"
              disabled
            ></button>
            <button type="button" className="btn btn-secondary">
              Oui
            </button>
            <button
              type="button"
              className="btn btn-secondary mr-0 ml-0 pr-0 pl-0"
              disabled
            ></button>
            <button type="button" className="btn btn-secondary">
              Non
            </button>
          </div>
        </div>

        <div>
          <p>Genre</p>
          <div
            className="btn-group filter__items1"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" className="btn btn-primary">
              (Aucun)
            </button>
            <button
              type="button"
              className="btn btn-secondary mr-0 ml-0 pr-0 pl-0"
              disabled
            ></button>
            <button type="button" className="btn btn-secondary">
              Homme
            </button>
            <button
              type="button"
              className="btn btn-secondary mr-0 ml-0 pr-0 pl-0"
              disabled
            ></button>
            <button type="button" className="btn btn-secondary">
              Femme
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
