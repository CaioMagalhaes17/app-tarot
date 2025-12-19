import { Button, Panel } from "@app/ui";
import { BasicTable } from "../../../components/Table";
import { DataTableColumn } from "mantine-datatable";
import { useNavigate } from "react-router-dom";

export function Payments() {
  const navigate = useNavigate()
  const columns: DataTableColumn<{
    id: string;
    price: string;
  }>[] = [
      {
        accessor: 'id',
        title: 'ID',
      },
      {
        accessor: 'price',
        title: 'Preço',
      },
      {
        accessor: 'actions',
        title: 'Ações',
        render: ({ id }) => {
          return (
            <div className="flex justify-center items-center">
              <Button onClick={() => navigate('/profile/payment/' + id)} className="btn-outline-primary btn-sm">Detalhes</Button>
            </div>
          )
        }
      }
    ]

  const data = [
    {
      id: '1',
      price: '25,00'
    },
    {
      id: '1',
      price: '25,00'
    },
    {
      id: '1',
      price: '25,00'
    }
  ]
  return (
    <>
      <Panel className="min-h-screen bg-black max-w-[1400px] mr-auto ml-auto rounded-xl border border-dark">
        <BasicTable columns={columns} records={data} title="Pagamentos" />
      </Panel>
    </>
  )
}