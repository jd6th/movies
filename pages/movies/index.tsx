import { DataTable } from 'mantine-datatable';
import { ActionIcon, Group, Text, TextInput, Button, Checkbox, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';

import MovieForm from '../../components/Form/movieForm';

import { movies } from '../../data/movies';

export default function Movies() {
    // eslint-disable-next-line max-len, @typescript-eslint/no-unused-vars
    function showInfo(movie) {
        console.log('info::: ', movie);
    }

    // eslint-disable-next-line max-len, @typescript-eslint/no-unused-vars
    function editInfo(movie: { title: string; year: string; runtime: string; } | { title: string; year: string; runtime: string; }): void {
        alert(`You clicked on ${title}, a ${year} president born in ${runtime}`);
    }

    // eslint-disable-next-line max-len, @typescript-eslint/no-unused-vars
    function deleteCompany(movie: { title: string; year: string; runtime: string; } | { title: string; year: string; runtime: string; }): void {
        alert(`You clicked on ${title}, a ${year} president born in ${runtime}`);
    }

    const openModal = () => modals.open({
        title: 'Enter Movie information',
        children: (<MovieForm />),
      });

    return (
        <>
            <div>Movies...</div>
            <DataTable
              withBorder
              shadow="xs"
              columns={[
                { accessor: 'title' },
                { accessor: 'year' },
                { accessor: 'runtime' },
                {
                    accessor: 'actions',
                    title: <Text mr="xs">Row actions</Text>,
                    textAlignment: 'right',
                    render: (movie) => (
                    <Group spacing={4} position="right" noWrap>
                        <ActionIcon color="green" onClick={() => showInfo(movie)}>
                        <IconEye size={16} />
                        </ActionIcon>
                        <ActionIcon
                          color="blue"
                          onClick={openModal}
                        >
                        <IconEdit size={16} />
                        </ActionIcon>
                        <ActionIcon color="red" onClick={() => deleteCompany(movie)}>
                        <IconTrash size={16} />
                        </ActionIcon>
                    </Group>
                    ),
                },
                ]}
              records={movies}
            />
        </>
    );
  }
