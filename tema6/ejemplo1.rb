require 'etcdv3'

etc = Etcdv3.new(endpoints: 'http://localhost:2379')

clave = etc.get('clave').kvs.first.value


puts "La clave es #{clave}"
