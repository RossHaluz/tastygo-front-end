"use client";
import { Formik, Form, Field, FieldArray } from "formik";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import { HiPlusSmall } from "react-icons/hi2";
import { AiOutlineMinus } from "react-icons/ai";
import { useRef, useState } from "react";
import { updateItem } from "@/redux/item/operetions";
import { useRouter } from "next/navigation";

const AdminUpdateItemForm = ({ item, categories }) => {
  const {
    allergens,
    category,
    characteristics,
    image,
    ingredients,
    nameItem,
    optiosIngredient,
    price,
    weight,
    _id: itemId,
  } = item;
  const dispatch = useDispatch();
  const optins = JSON.parse(optiosIngredient);
  const characteristicsOptions = JSON.parse(characteristics);
  const [allergenValue, setAllergenValue] = useState("");
  const [selectedAllergens, setSelectedAllergens] = useState(
    JSON.parse(allergens)
  );
  const [selectedFile, setSelectedFile] = useState("");
  const [currentImg, setCurrentImg] = useState(image);
  const fileRef = useRef();
  const redirect = useRouter();

  const selectedOptionsAllergens = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedAllergens((prev) => [...prev, value]);
    } else {
      setSelectedAllergens((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleAddAllergen = () => {
    setSelectedAllergens((prev) => [...prev, allergenValue]);
    setAllergenValue("");
  };

  const onChangeImg = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const initialValues = {
    nameItem: nameItem,
    weight: weight,
    ingredients: ingredients,
    price: price,
    category: category,
    optiosIngredient: optins,
    characteristics: characteristicsOptions,
  };

  const onSubmit = (values, { resetForm }) => {
    const {
      nameItem,
      weight,
      ingredients,
      price,
      optiosIngredient,
      characteristics,
      category,
    } = values;

    const data = new FormData();
    data.append("nameItem", nameItem);
    data.append("weight", weight);
    data.append("ingredients", ingredients);
    data.append("price", price);
    data.append("category", category);
    data.append("optiosIngredient", JSON.stringify(optiosIngredient));
    data.append("characteristics", JSON.stringify(characteristics));
    if (selectedFile) {
      data.append("image", selectedFile);
    }
    if (selectedAllergens.length > 0) {
      data.append("allergens", JSON.stringify(selectedAllergens));
    }
    dispatch(updateItem({ data, itemId }));
    redirect.push("/admin/items");
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                placeholder="Type price item"
                className="w-full border border-solid border-[#010101] py-[12.5px] px-[13px] rounded-[5px] text-[#B7B7B7] text-[16px] leading-[19.2px] outline-none"
              />

              <h3
                id="checkbox-group"
                className="text-[16px] font-medium uppercase"
              >
                Allergens
              </h3>
              {selectedAllergens?.map((item, idx) => (
                <label
                  key={item}
                  className="flex items-center gap-[10px] text-[16px] font-medium"
                >
                  <Field
                    type="checkbox"
                    name={`allergens.${idx}`}
                    value={item}
                    onChange={selectedOptionsAllergens}
                    checked={selectedAllergens?.find(
                      (option) => option === item
                    )}
                  />
                  {item}
                </label>
              ))}
              <Modal
                text={"add another"}
                title={"Add another allergen"}
                styles={
                  "text-[16px] font-medium bg-[#152F23] text-[#fff] p-[11.5px] rounded-[5px] flex items-center justify-center"
                }
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
                name="optiosIngredient"
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
                    {values.optiosIngredient &&
                      values.optiosIngredient?.length > 0 &&
                      values.optiosIngredient.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col gap-[16px] w-full"
                          >
                            <div className="flex items-center gap-[10px] w-full">
                              <Field
                                name={`optiosIngredient.${index}.option`} // Fix the typo here
                                className="py-[13.5px] px-[11.5px] border border-solid rounded-[5px] w-full outline-none"
                              />

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

              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[16px] font-medium uppercase">
                  Choose category
                </h3>
                <Field
                  as="select"
                  name="category"
                  className="border border-solid outline-none px-[20px] py-[13.5px]"
                >
                  <option value="">--Choose category--</option>
                  {categories?.map(({ title, _id: id }) => {
                    return (
                      <>
                        <option value={title} key={id}>
                          {title}
                        </option>
                      </>
                    );
                  })}
                </Field>
              </div>

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
                                className="flex flex-col gap-[10px]"
                                key={index}
                              >
                                <div className="flex flex-col gap-[10px]">
                                  <h3 className="text-[16px] font-medium">
                                    {item.name}
                                  </h3>
                                  <Field
                                    name={`characteristics.${index}.option`}
                                    className="border border-solid px-[11.5px] py-[13.5px] rounded-[5px] outline-none"
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </>
                      )}

                    <div>
                      <input
                        type="file"
                        className="hidden"
                        ref={fileRef}
                        onChange={onChangeImg}
                      />
                      {selectedFile ? (
                        <div className="flex flex-col gap-[10px]">
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Item image"
                            className="object-contain w-full h-[150px]"
                          />
                          <button
                            type="button"
                            className="text-[14px] text-red-400 font-medium"
                            onClick={() => setSelectedFile(null)}
                          >
                            Remove image
                          </button>
                        </div>
                      ) : (
                        currentImg && (
                          <div className="flex flex-col gap-[10px]">
                            <img
                              src={currentImg}
                              alt="Item image"
                              className="object-contain w-full h-[150px]"
                            />
                            <button
                              type="button"
                              className="text-[14px] text-red-400 font-medium"
                              onClick={() => setCurrentImg(null)}
                            >
                              Remove image
                            </button>
                          </div>
                        )
                      )}
                      {!selectedFile && !currentImg && (
                        <button
                          type="button"
                          onClick={() => fileRef.current.click()}
                          className="flex justify-center items-center p-[20px] border border-dashed border-[#152F23] w-full h-[150px] text-[16px] font-medium"
                        >
                          Add image
                        </button>
                      )}
                    </div>
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
    </>
  );
};

export default AdminUpdateItemForm;
