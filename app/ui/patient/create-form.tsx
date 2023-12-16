"use client"

import {FormEvent, Fragment, useState} from "react";
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import {getCodeCountry, getIdentityGender} from "@/app/api/country/codeMaintainers";

export default function Form() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<object>({
    typeIdentifier: '',
    identifier: '',
    given: '',
    firstSurname: '',
    secondSurname: '',
    country: '',
    nationality: '',
    birthPlace: '',
    phoneNumber: '',
    gender: '',
    identityGender: '',
    birthDate: '',
    isDeceased: ''
  })

  const handleOnChangeInput = (e) => {
    const {name, value, checked, type} = e.target;
    const newVal = type === "checkbox" ? checked : value;

    setData(prevState => ({
      ...prevState,
      [name]: newVal
    }))
  }

  const listCountry = getCodeCountry();
  const listIdentityGender = getIdentityGender();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)
    setError(null)

    try {

      const typeIdentifier = formaData.get('typeIdentifier');
      const identifier = formaData.get('identifier');
      const given = formaData.get('given');
      const firstSurname = formaData.get('firstSurname');
      const secondSurname = formaData.get('secondSurname');
      const country = formaData.get('country');
      const nationality = formaData.get('nationality');
      const birthPlace = formaData.get('birthPlace');
      const phoneNumber = formaData.get('phoneNumber');
      const gender = formaData.get('gender');
      const identityGender = formaData.get('identityGender');
      const birthDate = formaData.get('birthDate');
      const isDeceased = formaData.get('isDeceased');

      console.log(
        typeIdentifier,
      identifier,
      given,
      firstSurname,
      secondSurname,
      country,
      nationality,
      birthPlace,
      phoneNumber,
      gender,
      identityGender,
      birthDate,
      isDeceased
      );

      const request = {
        resourceType: "Patient",
        meta: {
          versionId: "1",
          lastUpdated: new Date()
        },
        extension: [
          {
            url: "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
            valueCodeableConcept: {
              coding: [
                {
                  "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
                  "code": "152"
                }
              ]
            }
          }
        ]
      };

      const response = await fetch('https://hapi.onfhir.cl/fhir/Patient', {
        method: 'POST',
        body: request,
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error('Error. '+ error.issue[0]?.diagnostics)
      }

      // Handle response if necessary
      const data = await response.json()
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Fragment>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="typeIdentifier" className="mb-2 block text-sm font-medium">
              Type identifier
            </label>
            <div className="relative mt-2 rounded-md">
              <select
                onChange={handleOnChangeInput}
                value={data.typeIdentifier}
                required={true}
                id="typeIdentifier"
                name="typeIdentifier"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              >
                <option value="">-- Select --</option>
                <option value="01">Run</option>
                <option value="02">Run materno/progenitor(a)</option>
                <option value="03">Número de Folio de comprobante de parto</option>
                <option value="04">Número de pasaporte</option>
                <option value="05">Número de documento identificador de país de origen</option>
                <option value="06">Número de identificador FONASA</option>
                <option value="07">Identificador Provisorio Escolar</option>
                <option value="08">Identificador Provisorio Apoderado</option>
                <option value="09">Registro Único de Contribuyentes</option>
              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="identifier" className="mb-2 block text-sm font-medium">
              Insert an identifier
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  onChange={handleOnChangeInput}
                  value={data.identifier}
                  required={true}
                  id="identifier"
                  name="identifier"
                  type="text"
                  placeholder="Enter identifier"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="given" className="mb-2 block text-sm font-medium">
              Insert an given
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  onChange={handleOnChangeInput}
                  value={data.given}
                  required={true}
                  id="given"
                  name="given"
                  type="text"
                  placeholder="Enter given"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="firstSurname" className="mb-2 block text-sm font-medium">
              Insert an first surname
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  onChange={handleOnChangeInput}
                  value={data.firstSurname}
                  required={true}
                  id="firstSurname"
                  name="firstSurname"
                  type="text"
                  placeholder="Enter first surname"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="secondSurname" className="mb-2 block text-sm font-medium">
              Insert an second surname
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  onChange={handleOnChangeInput}
                  value={data.secondSurname}
                  required={true}
                  id="secondSurname"
                  name="secondSurname"
                  type="text"
                  placeholder="Enter second surname"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="mb-2 block text-sm font-medium">
              Country of origin
            </label>
            <div className="relative mt-2 rounded-md">
              <select
                onChange={handleOnChangeInput}
                value={data.country}
                required={true}
                id="country"
                name="country"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              >
                <option value="">-- Select --</option>
                {listCountry.map((value, key) => {
                  return (
                    <option key={`${key}`} value={value.Code}>{value.Display}</option>
                  )
                })}
              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="nationality" className="mb-2 block text-sm font-medium">
              Nationality
            </label>
            <div className="relative mt-2 rounded-md">
              <select
                onChange={handleOnChangeInput}
                value={data.nationality}
                required={true}
                id="nationality"
                name="nationality"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              >
                <option value="">-- Select --</option>
                {listCountry.map((value, key) => {
                  return (
                    <option key={`${key}`} value={value.Code}>{value.Display}</option>
                  )
                })}
              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="birthPlace" className="mb-2 block text-sm font-medium">
              Insert an birth place
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  onChange={handleOnChangeInput}
                  value={data.birthPlace}
                  required={true}
                  id="birthPlace"
                  name="birthPlace"
                  type="text"
                  placeholder="Enter birth place"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium">
              Insert an phone number
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  onChange={handleOnChangeInput}
                  value={data.phoneNumber}
                  required={true}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  pattern={"[1-9]{9}"}
                  maxLength="9"
                  placeholder="Enter phone number 987654321"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="mb-2 block text-sm font-medium">
              Gender
            </label>
            <div className="relative mt-2 rounded-md">
              <select
                onChange={handleOnChangeInput}
                value={data.gender}
                required={true}
                id="gender"
                name="gender"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              >
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="unknown">Unknown</option>

              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="identityGender" className="mb-2 block text-sm font-medium">
              Identity Gender
            </label>
            <div className="relative mt-2 rounded-md">
              <select
                onChange={handleOnChangeInput}
                value={data.identityGender}
                required={true}
                id="identityGender"
                name="identityGender"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              >
                <option value="">-- Select --</option>
                {listIdentityGender.map((value, key) => {
                  return (
                    <option key={`${key}`} value={value.Code}>{value.Display}</option>
                  )
                })}
              </select>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="birthDate" className="mb-2 block text-sm font-medium">
              Insert an birth date
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  onChange={handleOnChangeInput}
                  value={data.birthDate}
                  required={true}
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  maxLength="9"
                  placeholder="Enter phone number 987654321"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          {/*"deceasedBoolean": false*/}
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              is Deceased ?
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    onChange={handleOnChangeInput}
                    value={data.isDeceased}
                    id="yes"
                    name="isDeceased"
                    type="radio"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="pending"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    Yes <ClockIcon className="h-4 w-4" />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={handleOnChangeInput}
                    value={data.isDeceased}
                    id="no"
                    name="isDeceased"
                    type="radio"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="paid"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    No <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/patients"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Create Patient'}
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
