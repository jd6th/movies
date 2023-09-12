import { useState } from 'react';
import { TextInput, Button, Group, Box, Textarea, Select } from '@mantine/core';
import { useForm, isNotEmpty } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';

/*
- Id
- Title
- Synopsis
- ShowingDate
- AudienceType
- Duration
- Year
- Rating
- Image
- Genre
- Director
- Actors
*/

export default function MovieForm() {
  const [dateVal, setDateVal] = useState<Date | null>(null);

  const form = useForm({
    initialValues: {
      title: '',
      synopsis: '',
      showingDate: '',
      rated: '',
      runtime: '',
      poster: '',
      genre: '',
      director: '',
      actors: '',
    },

    validate: {
      title: isNotEmpty('Title is required'),
      synopsis: isNotEmpty('Synopsis is required'),
      // eslint-disable-next-line consistent-return
      showingDate: (value) => {
        // dateVal === null ? console.log('mali:::', dateVal) : console.log('tama:::', dayjs(dateVal).format('DD/MM/YYYY'));
        console.log('date VAL:::', value);
        if (dateVal === null) {
          return 'Invalid Date';
        }
      },
      rated: isNotEmpty('Rated is required'),
      runtime: isNotEmpty('Runtime is required'),
      poster: isNotEmpty('Poster is required'),
      // genre: isNotEmpty('Genre is required'),
    },
  });

  return (
    <Box maw={600} mih={700} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Title"
          placeholder="movie title"
          {...form.getInputProps('title')}
        />

        <Textarea
          withAsterisk
          label="Synopsis"
          placeholder="synopsis..."
          {...form.getInputProps('synopsis')}
          autosize
          minRows={2}
          maxRows={4}
        />

        <DatePickerInput
          withAsterisk
          label="Pick date"
          placeholder="Pick date"
          {...form.getInputProps('showingDate')}
          value={dateVal}
          onChange={(value) => {
            setDateVal(value);
            if (value !== null) {
              form.setFieldValue('showingDate', dayjs(value).format('DD/MM/YYYY'));
            }
          }}
        />

        <TextInput
          withAsterisk
          label="Rated"
          placeholder="rated"
          {...form.getInputProps('rated')}
        />

        <TextInput
          withAsterisk
          label="Runtime"
          placeholder="runtime"
          {...form.getInputProps('runtime')}
        />

        <TextInput
          withAsterisk
          label="Poster"
          placeholder="poster"
          {...form.getInputProps('poster')}
        />

        {/* <Select
          label="Movie Genre"
          placeholder="Pick genre"
          data={[
            { value: 'comedy', label: 'Comedy' },
            { value: 'drama', label: 'Drama' },
            { value: 'action', label: 'Action' },
            { value: 'horror', label: 'Horror' },
          ]}
        /> */}

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
