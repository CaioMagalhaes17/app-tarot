import React from 'react'

import { DataTable, DataTableProps } from 'mantine-datatable'
import { HSeparator } from '@app/ui'

type BasicTableInterface<DataTableType> = {
  title?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  query?: string
  handleOnChangeQuery?: (value: string) => void
  needSearch?: boolean

} & DataTableProps<DataTableType>
export function BasicTable<T = unknown>({
  title,
  children,
  handleOnChangeQuery = () => { },
  query = '',
  icon,
  needSearch,
  ...rest
}: BasicTableInterface<T>) {
  return (
    <div className="panel p-4">
      <h5 className="flex flex-row gap-5 font-semibold text-lg dark:text-white-light mb-5">
        <span className="text-5xl font-bold text-dark dark:text-white flex flex-row gap-5 font-smythe" id="title">{icon}{title}</span>
      </h5>
      <HSeparator className='mt-2 mb-5' />
      <div className="flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-5">
        <div className="flex items-center flex-wrap">{children}</div>
        {needSearch &&
          <input
            id="search2"
            type="text"
            className="form-input w-auto"
            placeholder="Procurar..."
            value={query}
            onChange={(event) => handleOnChangeQuery(event.target.value)}
          ></input>
        }
      </div>
      <MantineDataTable {...rest} />
    </div>
  )
}


function MantineDataTable<TypeProps>({
  ...rest
}: DataTableProps<TypeProps>) {
  const height = rest.height
  return (
    <div className="datatables ">
      <DataTable<TypeProps>
        className="whitespace-nowrap table-hover"
        noRecordsText="Nenhum resultado encontrado"
        highlightOnHover
        height={height || 550}
        minHeight={150}
        customLoader={
          (
            <span className="animate-spin border-4 border-primary border-l-transparent rounded-full w-12 h-12 inline-block align-middle" />
          ) as unknown as undefined
        }
        {...rest}
      />
    </div>
  )
}

