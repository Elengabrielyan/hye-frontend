import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./form.module.css";
import texts from "../../styles/texts.module.css";
import "../../styles/transition.css";

import FormInput from "./FormInput/FormInput";
import MultipleOption from "./MultipleOption/MultipleOption";
import ProgressBar from "../ProgressBar/ProgressBar";

import SingleOption from "./SignleOption/SingleOption";
import { Link } from "react-router-dom";
import paths from "../../paths";

export default function Form() {
  const [members, setMembers] = useState([
    {
      id: 0,
      content: "One",
      active: false,
    },
    {
      id: 1,
      content: "Two",
      active: false,
    },
    {
      id: 2,
      content: "Three",
      active: false,
    },
    {
      id: 3,
      content: "Four",
      active: false,
    },
    {
      id: 4,
      content: "Five",
      active: false,
    },
    {
      id: 5,
      content: "More",
      active: false,
    },
  ]);
  const [numOfChildren, setNumOfChildren] = useState([
    {
      id: 0,
      content: "None",
      active: false,
    },
    {
      id: 1,
      content: "One",
      active: false,
    },
    {
      id: 2,
      content: "Two",
      active: false,
    },
    {
      id: 3,
      content: "Three",
      active: false,
    },
    {
      id: 4,
      content: "Four",
      active: false,
    },
    {
      id: 5,
      content: "More",
      active: false,
    },
  ]);
  const [ages, setAges] = useState([
    {
      id: 0,
      content: "0 - 4 weeks",
      active: false,
      gender: "",
    },
    {
      id: 1,
      content: "4 weeks - 1 year",
      active: false,
      gender: "",
    },
    {
      id: 2,
      content: "1 year - 5 years",
      active: false,
      gender: "",
    },
    {
      id: 3,
      content: "6 years - 12 years",
      active: false,
      gender: "",
    },
    {
      id: 4,
      content: "12 years - 19 years",
      active: false,
      gender: "",
    },
  ]);
  const [products, setProducts] = useState([
    {
      id: 0,
      content: "Armenian Recipies",
      active: false,
    },
    {
      id: 1,
      content: "Book for Children",
      active: false,
    },
    {
      id: 2,
      content: "Boardgames",
      active: false,
    },
    {
      id: 3,
      content: "Dried Fruits & Other Snacks",
      active: false,
    },
    {
      id: 4,
      content: "Beauty & Care Products",
      active: false,
    },
    {
      id: 5,
      content: "Art & Crafts",
      active: false,
    },
    {
      id: 6,
      content: "Handmade Items",
      active: false,
    },
    {
      id: 7,
      content: "Silver Accessories",
      active: false,
    },
    {
      id: 8,
      content: "Home Decor",
      active: false,
    },
  ]);
  const [specificProducts, setSpecificProducts] = useState([]);

  const handleMembers = (id) => {
    setMembers(
      members.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  const handleNumOfChildrens = (id) => {
    setNumOfChildren(
      numOfChildren.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  const handleAges = (id) => {
    setAges(
      ages.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const handleProducts = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const handleGender = (id, content) => {
    setAges(
      ages.map((item) => {
        if (item.id === id && item.gender !== content) {
          return { ...item, gender: content };
        } else if (item.id === id && item.gender === content) {
          return { ...item, gender: "" };
        } else {
          return item;
        }
      })
    );
  };

  const handleInput = (prodsType, value) => {
    if (prodsType === "products") {
      const idx =
        products.length > 0 ? products[products.length - 1].id + 1 : 0;

      const existStatus = products.some((item) => item.content === value);

      if (!existStatus) {
        setProducts([
          ...products,
          {
            id: idx,
            content: value,
            active: true,
          },
        ]);
      }
    } else if (prodsType === "specific") {
      const idx =
        specificProducts.length > 0
          ? specificProducts[specificProducts.length - 1].id + 1
          : 0;

      const existStatus = specificProducts.some(
        (item) => item.content === value
      );

      if (!existStatus) {
        setSpecificProducts([
          ...specificProducts,
          {
            id: idx,
            content: value,
            active: true,
          },
        ]);
      }
    }
  };

  const filterChoosen = (item) => {
    return item.filter((el) => el.active);
  };

  return (
    <>
      <ProgressBar fill="75%" />
      <div className={styles.wrapper}>
        <h1 className={texts.formTitle}>Customize Your Box</h1>
        <p className={texts.formDescription}>
          Filling this form you can help us to make your box as customized as
          possible.
        </p>
        <TransitionGroup component={null}>
          <div className={styles.step}>
            <SingleOption
              title="Number of Family Members"
              description="If the box is a gift, feel free to choose “One” as an option or ..."
              btnType="small"
              items={members}
              handleChoosing={handleMembers}
            />
          </div>

          {members.some((el) => el.active === true) && (
            <CSSTransition timeout={1000} classNames="step">
              <div className={styles.step}>
                <SingleOption
                  title="Number of Children"
                  description="Multiple choice is available"
                  btnType="small"
                  items={numOfChildren}
                  handleChoosing={handleNumOfChildrens}
                />
              </div>
            </CSSTransition>
          )}

          {numOfChildren.some(
            (el) => el.active === true && el.content !== "None"
          ) && (
            <CSSTransition timeout={1000} classNames="step">
              <div className={styles.step}>
                <MultipleOption
                  title="Children’s Age & Gender"
                  description="Multiple choice is available"
                  btnType="large"
                  items={ages}
                  render={true}
                  handleChoosing={handleAges}
                  handleGender={handleGender}
                  wrapperType="column"
                />
              </div>
            </CSSTransition>
          )}

          {(ages.some((el) => el.active === true) ||
            numOfChildren.some((el) => el.active && el.content === "None")) && (
            <CSSTransition timeout={1000} classNames="step">
              <div className={styles.step}>
                <div>
                  <MultipleOption
                    title="What Kind of Products Would You Like To Receive?"
                    description="You can choose more than one preference"
                    btnType="auto"
                    items={products}
                    handleChoosing={handleProducts}
                    wrapperType="row"
                  />

                  <FormInput
                    type="products"
                    placeholder="Add Your Preference"
                    handleInput={handleInput}
                  />
                </div>
              </div>
            </CSSTransition>
          )}

          {products.some((el) => el.active === true) && (
            <CSSTransition timeout={1000} classNames="step">
              <div className={styles.step}>
                <div>
                  <MultipleOption
                    title="Specific Products You Would Like To Receive From Armenia?"
                    btnType="auto"
                    items={specificProducts}
                    handleChoosing={handleProducts}
                    wrapperType="row"
                  />

                  <FormInput
                    type="specific"
                    placeholder="Add Your Preference"
                    handleInput={handleInput}
                  />
                </div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <Link to={!!members.some((el) => el.active === true) && paths.payment}>
          <button
            className={styles.nextBtn}
            disabled={!members.some((el) => el.active === true)}
            onClick={() => {
              localStorage.setItem(
                "Form Info",
                JSON.stringify({
                  members: filterChoosen(members),
                  numOfChildren: filterChoosen(numOfChildren),
                  ages: filterChoosen(ages),
                  products: filterChoosen(products),
                  specificProducts: filterChoosen(specificProducts),
                })
              );

              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Next
          </button>
        </Link>
      </div>
    </>
  );
}
