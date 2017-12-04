export const localeFilters = {
  id: 'locale',
  name: 'Locale',
  values: [
    {
      value: 'en_AU',
      name: 'en_AU'
    },
    {
      value: 'de_DE',
      name: 'de_DE '
    },
    {
      value: 'pt_BR',
      name: 'pt_BR'
    },
    {
      value: 'fr_FR',
      name: 'fr_FR'
    },
    {
      value: 'en_US',
      name: 'en_US'
    },
    {
      value: 'es_AR',
      name: 'es_AR'
    }
  ]
};

export const countryFilters = {
  id: 'country',
  name: 'País',
  values: [
    {
      value: 'AU',
      name: 'Australia'
    },
    {
      value: 'DE',
      name: 'Alemanha'
    },
    {
      value: 'BR',
      name: 'Brasil'
    },
    {
      value: 'PT',
      name: 'Portugal'
    },
    {
      value: 'US',
      name: 'EUA'
    },
    {
      value: 'RU',
      name: 'Rússia'
    }
  ]
};

export const timestampFilters = {
  id: 'timestamp',
  name: 'Data e Horário',
  validation: {
    primitiveType: 'STRING',
    entityType: 'DATE_TIME',
    pattern: 'yyyy-MM-ddTHH:mm:ss'
  }
};
export const limitFilters = {
  id: 'limit',
  name: 'Quantidade',
  validation: {
    primitiveType: 'INTEGER',
    min: 1,
    max: 50
  }
};

export const offsetFilters = {
  id: 'offset',
  name: 'Página',
  validation: {
    primitiveType: 'INTEGER'
  }
};
