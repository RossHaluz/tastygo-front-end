"use client";
import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Modal from "../Modal";
import { HiPlusSmall } from "react-icons/hi2";
import { AiOutlineMinus } from "react-icons/ai";

const validationSchema = Yup.object({
  nameItem: Yup.string("Type name item").required("Name is required"),
  weight: Yup.string("Type weight item").required("Weight is required"),
  ingredient: Yup.string("Type ingredients item").required(
    "Ingredients is required"
  ),
  price: Yup.string("Type price item").required("Price is required"),
});

const AdminAddItemForm = () => {
  const [allergens, setAllergens] = useState(["Salmon", "Almonds"]);
  const [allergenValue, setAllergenValue] = useState("");
  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const selectedOptionsAllergens = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedAllergens((prev) => [...prev, value]);
    } else {
      setSelectedAllergens((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleAddAllergen = () => {
    setAllergens((prev) => [...prev, allergenValue]);
    setAllergenValue("");
  };

  const initialValues = {
    nameItem: "",
    weight: "",
    ingredients: "",
    price: "",
    options: [],
    characteristics: [
      { name: "Amount per serving", option: "" },
      { name: "Calories", option: "" },
      { name: "Protein", option: "" },
      { name: "Fat", option: "" },
      { name: "Carbs", option: "" },
    ],
  };

  const onSubmit = (values, { resetForm }) => {
    const { characteristics, options } = values;
    console.log(values);
    if (selectedAllergens.length > 0) {
      console.log(selectedAllergens);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => {
        return (
          <Form className="w-full flex flex-col gap-[24px]">
            <Field
              name="nameItem"
              placeholder="Type name item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />

            <Field
              name="weight"
              placeholder="Type weight item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />

            <Field
              name="ingredients"
              placeholder="Type ingredients item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />

            <Field
              name="price"
              placeholder="Type ingredients item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />

            <h3
              id="checkbox-group"
              className="text-[16px] font-medium uppercase"
            >
              Allergens
            </h3>
            {allergens?.map((item, idx) => (
              <label
                key={item}
                className="flex items-center gap-[10px] text-[16px] font-medium"
              >
                <Field
                  type="checkbox"
                  name={`allergens.${idx}`}
                  value={item}
                  onChange={selectedOptionsAllergens}
                  checked={selectedAllergens.find((option) => option === item)}
                />
                {item}
              </label>
            ))}
            <Modal
              text={"add another"}
              title={"Add another allergen"}
              styles={"px-[24px] py-[11.5px] border border-solid rounded-[5px]"}
            >
              <input
                type="text"
                placeholder="Type name allergen"
                value={allergenValue}
                onChange={(e) => setAllergenValue(e.target.value)}
                className="px-[13.5px] py-[11.5px] border border-solid rounded-[5px]"
              />
              <button
                type="button"
                onClick={handleAddAllergen}
                className="text-[16px] font-medium flex justify-center items-center rounded-[5px] text-[#fff] bg-[#152F23] py-[11.5px] px-[11.5px]"
              >
                Add
              </button>
            </Modal>

            <FieldArray
              name="options"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-[16px] items-start">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-[16px] font-medium uppercase">
                      Add the ingredients
                    </h3>
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push({ option: "" })}
                      className="p-[10px] rounded-[5px] bg-[#152F23] text-[#fff]"
                    >
                      <HiPlusSmall />
                    </button>
                  </div>
                  {values.options &&
                    values.options?.length > 0 &&
                    values.options.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col gap-[16px] w-full"
                        >
                          <div className="flex items-center gap-[10px] w-full">
                            <label className="flex items-center gap-[10px] w-full">
                              Name:
                              <Field
                                name={`options.${index}.option`} // Fix the typo here
                                className="py-[13.5px] px-[11.5px] border border-solid rounded-[5px] w-full"
                              />
                            </label>
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                              className="text-red-400 text-[18px] font-medium"
                            >
                              <AiOutlineMinus />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            />
            <FieldArray
              name="characteristics"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-[16px]">
                  <h3 className="text-[16px] font-medium uppercase">
                    Characteristics
                  </h3>

                  {values.characteristics &&
                    values.characteristics.length > 0 && (
                      <>
                        {values.characteristics.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-[10px]"
                            >
                              <h3>{item.name}</h3>
                              <Field
                                name={`characteristics.${index}.option`}
                                className="border border-solid px-[11.5px] py-[13.5px] rounded-[5px]"
                              />
                            </div>
                          );
                        })}
                      </>
                    )}
                </div>
              )}
            />

            <button
              type="submit"
              className="text-[16px] font-medium bg-[#152F23] text-[#fff] p-[11.5px] rounded-[5px] flex items-center justify-center"
            >
              Add item
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AdminAddItemForm;

{
  /* <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={validationSchema}
>
  {({ values }) => {
    return (
      <Form className="flex flex-col gap-[24px] w-full">
        <label className="flex flex-col gap-[16px] text-[16px] font-medium uppercase">
          Name item
          <div className="flex flex-col gap-[10px]">
            <Field
              name="nameItem"
              type="text"
              placeholder="Type name item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />
            <ErrorMessage
              name="nameItem"
              component="p"
              className="text-red-400 font-normal"
            />
          </div>
        </label>
        <label className="flex flex-col gap-[16px] text-[16px] font-medium uppercase">
          Weight
          <div className="flex flex-col gap-[10px]">
            <Field
              name="weight"
              type="text"
              placeholder="Type name item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />
            <ErrorMessage
              name="weight"
              component="p"
              className="text-red-400 font-normal"
            />
          </div>
        </label>
        <label className="flex flex-col gap-[16px] text-[16px] font-medium uppercase">
          Ingredients
          <div className="flex flex-col gap-[10px]">
            <Field
              name="ingredients"
              type="text"
              placeholder="Type name item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />
            <ErrorMessage
              name="ingredients"
              component="p"
              className="text-red-400 font-normal"
            />
          </div>
        </label>
        <h3 id="checkbox-group" className="text-[16px] font-medium uppercase">
          Allergens
        </h3>
        {allergens?.map((item) => (
          <label
            key={item}
            className="flex items-center gap-[10px] text-[16px] font-medium"
          >
            <Field type="checkbox" name="allergens" value={item} />
            {item}
          </label>
        ))}
        <Modal
          text={"add another"}
          title={"Add another allergen"}
          styles={"px-[24px] py-[11.5px] border border-solid rounded-[5px]"}
        >
          <input
            type="text"
            placeholder="Type name allergen"
            value={allergenValue}
            onChange={(e) => setAllergenValue(e.target.value)}
            className="px-[13.5px] py-[11.5px] border border-solid rounded-[5px]"
          />
          <button
            type="button"
            onClick={handleAddAllergen}
            className="text-[16px] font-medium flex justify-center items-center rounded-[5px] text-[#fff] bg-[#152F23] py-[11.5px] px-[11.5px]"
          >
            Add
          </button>
        </Modal>
        <label className="flex flex-col gap-[16px] text-[16px] font-medium uppercase">
          Price
          <div className="flex flex-col gap-[10px]">
            <Field
              name="price"
              type="text"
              placeholder="Type name item"
              className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
            />
            <ErrorMessage
              name="price"
              component="p"
              className="text-red-400 font-normal"
            />
          </div>
        </label>
        <FieldArray
          name="options"
          render={(arrayHelpers) => (
            <div className="flex flex-col gap-[16px] items-start">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-[16px] font-medium uppercase">
                  Add the ingredients
                </h3>
                <button
                  type="button"
                  onClick={() => arrayHelpers.push({ option: "" })}
                  className="p-[10px] rounded-[5px] bg-[#152F23] text-[#fff]"
                >
                  <HiPlusSmall />
                </button>
              </div>
              {values.options &&
                values.options?.length > 0 &&
                values.options.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-[16px] w-full"
                    >
                      <div className="flex items-center gap-[10px] w-full">
                        <label className="flex items-center gap-[10px] w-full">
                          Name:
                          <Field
                            name={`options.${index}.option`} // Fix the typo here
                            className="py-[13.5px] px-[11.5px] border border-solid rounded-[5px] w-full"
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                          className="text-red-400 text-[18px] font-medium"
                        >
                          <AiOutlineMinus />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        />
        <FieldArray
          name="characteristics"
          render={(arrayHelpers) => (
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[16px] font-medium uppercase">
                Characteristics
              </h3>

              {values.characteristics && values.characteristics.length > 0 && (
                <>
                  {values.characteristics.map((item, index) => {
                    return (
                      <div key={index} className="flex items-center gap-[10px]">
                        <h3>{item.name}</h3>
                        <Field
                          name={`characteristics.${index}.option`}
                          className="border border-solid px-[11.5px] py-[13.5px] rounded-[5px]"
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          )}
        />

        <button
          type="submit"
          className="text-[16px] font-medium bg-[#152F23] text-[#fff] p-[11.5px] rounded-[5px] flex items-center justify-center"
        >
          Add item
        </button>
      </Form>
    );
  }}
</Formik>; */
}
