import { Button, Panel } from "@app/ui";
import { BasicTable } from "../../../components/Table";
import { DataTableColumn } from "mantine-datatable";
import { useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate()
  const columns: DataTableColumn<{
    id: string;
    description: string;
    atendentName: string;
  }>[] = [
      {
        accessor: 'id',
        title: 'ID',
      },
      {
        accessor: 'description',
        title: 'Descrição do Atendimento',
      },
      {
        accessor: 'atendentName',
        title: 'Nome do atendente',
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
      description: 'Cartas do amor',
      atendentName: 'Márcio tarologo'
    },
    {
      id: '2',
      description: 'Cartas do amor',
      atendentName: 'Márcio tarologo'
    },
    {
      id: '3',
      description: 'Cartas do amor',
      atendentName: 'Márcio tarologo'
    },
  ]
  return (
    <>
      <Panel className="min-h-screen bg-black max-w-[1400px] mr-auto ml-auto rounded-xl border border-dark">
        <BasicTable columns={columns} records={data} title="Atendimentos" />
      </Panel>
    </>
  )
}